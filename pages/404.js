// import Script from "next/script"


// export default function Coustom404() {
//     return (
//         <>
//             <h1>404  not found ...rediricting to home page</h1>
//             <Script
//                 id="redirecting"
//             >
//                 {`
//        document.location.href="sitemap";
//        `}
//             </Script>
//         </>
//     )
// }

// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// const NotFoundPage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     // Redirect to homepage after 2 seconds
//     const redirectTimer = setTimeout(() => {
//       router.push('/');
//     },10);

//     return () => clearTimeout(redirectTimer);
//   }, [router]);

//   return (
// <>
// <h5>Page Not Found ....
//     We Are Redirecting To The Home Page
//      </h5>
// </>
//   );
// };

// export default NotFoundPage;
