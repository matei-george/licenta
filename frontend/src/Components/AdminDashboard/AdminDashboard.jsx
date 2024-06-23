import Chart from "react-apexcharts";
import { useGetUsersQuery } from "../../redux/api/usersApiSlice";
import { useGetTotalOrdersQuery, useGetTotalSalesByDateQuery, useGetTotalSalesQuery } from "../../redux/api/orderApiSlice";

import { useState, useEffect } from "react";
import OrderList from "../OrderList/OrderList";
import Loader from "../Loader/Loader";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AdminDashboard = () => {
   const { data: sales, isLoading } = useGetTotalSalesQuery();
   const { data: customers, isLoading: loading } = useGetUsersQuery();
   const { data: orders, isLoading: loadingTwo } = useGetTotalOrdersQuery();
   const { data: salesDetail } = useGetTotalSalesByDateQuery();

   const [state, setState] = useState({
      options: {
         chart: {
            type: "line",
         },
         tooltip: {
            theme: "dark",
         },
         colors: ["#1c4563"],
         dataLabels: {
            enabled: true,
         },
         stroke: {
            curve: "smooth",
         },
         title: {
            text: "Grafic Vânzări",
            align: "left",
         },
         grid: {
            borderColor: "#ccc",
         },
         markers: {
            size: 1,
         },
         xaxis: {
            categories: [],
            title: {
               text: "Data",
            },
            labels: {
               formatter: function (val) {
                  return new Date(val).toLocaleDateString("en-US", {
                     day: "2-digit",
                     month: "2-digit",
                     year: "2-digit",
                  });
               },
            },
         },
         yaxis: {
            title: {
               text: "Suma vânzărilor",
            },
            min: 0,
            labels: {
               formatter: function (val) {
                  return val.toFixed(0); // Less precision
               },
            },
         },
         legend: {
            position: "top",
            horizontalAlign: "right",
            floating: true,
            offsetY: -25,
            offsetX: -5,
         },
      },
      series: [{ name: "Vânzări", data: [] }],
   });

   useEffect(() => {
      if (salesDetail) {
         const formattedSalesDate = salesDetail.map((item) => ({
            x: item._id,
            y: item.totalSales,
         }));

         setState((prevState) => ({
            ...prevState,
            options: {
               ...prevState.options,
               xaxis: {
                  ...prevState.options.xaxis,
                  categories: formattedSalesDate.map((item) => item.x),
               },
            },
            series: [{ name: "Sales", data: formattedSalesDate.map((item) => item.y) }],
         }));
      }
   }, [salesDetail]);

   return (
      <>
         <AdminNavbar />

         <section className="flex flex-col items-center text-blue-900">
            <div className="flex justify-around flex-wrap w-full max-w-screen-lg px-4 py-6">
               <div className="rounded-lg  shadow-xl p-5 w-80 mt-5 text-center">
                  <p className="mt-5">Vânzări</p>
                  <h1 className="text-xl font-bold">{isLoading ? <Loader /> : `LEI ${sales.totalSales.toFixed(2)}`}</h1>
               </div>
               <div className="rounded-lg  shadow-xl p-5 w-80 mt-5 text-center">
                  <p className="mt-5">Clienți</p>
                  <h1 className="text-xl font-bold">{loading ? <Loader /> : customers?.length}</h1>
               </div>
               <div className="rounded-lg shadow-xl p-5 w-80 mt-5 text-center">
                  <p className="mt-5">Număr total de comenzi</p>
                  <h1 className="text-xl font-bold">{loadingTwo ? <Loader /> : orders?.totalOrders}</h1>
               </div>
            </div>

            <div className="w-full max-w-screen-lg mt-10">
               <Chart options={state.options} series={state.series} type="line" width="100%" />
            </div>
         </section>
      </>
   );
};

export default AdminDashboard;
