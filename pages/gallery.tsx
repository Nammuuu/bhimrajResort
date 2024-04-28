// import React, { useEffect, useState } from "react";
// import Hero from "../lib/components/Hero";
// import Layout from "../lib/components/Layout";
// import hero from "../lib/assets/carousel/BR RESORT MAIN FRONT PHOTO (1).jpg";
// import FancyText from "../lib/components/FancyText";
// import Head from "next/head";
// import { GetStaticProps, GetStaticPropsContext } from "next";
// import Image from "next/image";
// import client from "../lib/client";
// import { EntryCollection } from "contentful";

// const Galery = ({
//   data,
// }: {
//   data: { id: number; caption: string; url: string }[];
// }) => {
//   return (
//     <Layout>
//       <Head>
//         <title>Bhimraj Resort | Gallery</title>
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1.0"
//         ></meta>
//       </Head>
//       <Hero src={hero} text="gallery" darken />
//       <section className="w-full py-24">
//         <FancyText bgText="pictures" className="my-12">
//           Gallery
//         </FancyText>
//         <div className="m-auto flex flex-wrap justify-center relative w-11/12 md:w-4/5  mt-24 gap-4">
//           {data.map(({ id, url, caption }) => (
//             <div key={id} className="flex flex-col items-center">
//               <LoadImage url={url} />
//               <span className="w-full font-sans uppercase text-lg mt-2 text-center">
//                 {caption}
//               </span>
//             </div>
//           ))}
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Galery;

// const LoadImage = ({ url }: { url: string }) => {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <div className="w-60 h-60 relative">
//       <Image
//         src={url}
//         objectFit="cover"
//         layout="fill"
//         onLoad={() => setLoaded(true)}
//         alt="Gallery Image"
//       />
//       {!loaded && (
//         <div className="absolute top-0 left-0 w-full h-full bg-white flex items-center justify-center">
//           <svg viewBox="0 0 100 100" className="w-24 h-24 animate-spin">
//             <path
//               fill="#555"
//               d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
//             ></path>
//           </svg>
//         </div>
//       )}
//     </div>
//   );
// };

// // export const getStaticProps: GetStaticProps = async (
// //   context: GetStaticPropsContext
// // ) => {
// //   const data: EntryCollection<{
// //     description: string;
// //     image: { fields: { file: { url: string } } };
// //   }> = await client.getEntries({ content_type: "gallery" });

// //   return {
// //     props: {
// //       data: data.items.map((d) => ({
// //         id: d.sys.id,
// //         caption: d.fields.description,
// //         url: `https:${d.fields.image.fields.file.url}`,
// //       })),
// //     },
// //   };
// // };


// export const getStaticProps: GetStaticProps = async () => {
//   try {
//     const data: EntryCollection<{
//       title: string;
//       date: string;
//       location: string;
//       description: string;
//       image: { fields: { file: { url: string } } };
//     }> = await client.getEntries({
//       content_type: "events",
//     });

//     // Log the fetched data for debugging
//     console.log("Fetched data:", data);

//     return {
//       props: {
//         data: data.items.map((d) => ({
//           id: d.sys.id,
//           title: d.fields.title,
//           date: d.fields.date,
//           location: d.fields.location,
//           description: d.fields.description,
//           url: `https:${d.fields.image.fields.file.url}`,
//         })),
//       },
//     };
//   } catch (error) {
//     // Handle errors
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         data: [],
//       },
//     };
//   }
// };


// import React from 'react'

// const gallery = () => {
//   return (
//     <div>gallery</div>
//   )
// }

// export default gallery

// import React, { useEffect, useState } from "react";
// import Hero from "../lib/components/Hero";
// import Layout from "../lib/components/Layout";
// import hero from "../lib/assets/carousel/BR RESORT MAIN FRONT PHOTO (1).jpg";
// import FancyText from "../lib/components/FancyText";
// import Head from "next/head";
// import { GetStaticProps, GetStaticPropsContext } from "next";
// import Image from "next/image";
// import client from "../lib/client";
// import { EntryCollection } from "contentful";

// const Galery = ({
//   data,
// }: {
//   data: { id: number; caption: string; url: string }[];
// }) => {
//   return (
//     <Layout>
//       <Head>
//         <title>Bhimraj Resort | Gallery</title>
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1.0"
//         ></meta>
//       </Head>
//       <Hero src={hero} text="gallery" darken />
//       <section className="w-full py-24">
//         <FancyText bgText="pictures" className="my-12">
//           Gallery
//         </FancyText>
//         <div className="m-auto flex flex-wrap justify-center relative w-11/12 md:w-4/5  mt-24 gap-4">
//           {data.map(({ id, url, caption }) => (
//             <div key={id} className="flex flex-col items-center">
//               <LoadImage url={url} />
//               <span className="w-full font-sans uppercase text-lg mt-2 text-center">
//                 {caption}
//               </span>
//             </div>
//           ))}
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Galery;

// const LoadImage = ({ url }: { url: string }) => {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <div className="w-60 h-60 relative">
//       <Image
//         src={url}
//         objectFit="cover"
//         layout="fill"
//         onLoad={() => setLoaded(true)}
//         alt="Gallery Image"
//       />
//       {!loaded && (
//         <div className="absolute top-0 left-0 w-full h-full bg-white flex items-center justify-center">
//           <svg viewBox="0 0 100 100" className="w-24 h-24 animate-spin">
//             <path
//               fill="#555"
//               d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
//             ></path>
//           </svg>
//         </div>
//       )}
//     </div>
//   );
// };

// export const getStaticProps: GetStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   const data: EntryCollection<{
//     description: string;
//     image: { fields: { file: { url: string } } };
//   }> = await client.getEntries({ content_type: "gallery" });

//   return {
//     props: {
//       data: data.items.map((d) => ({
//         id: d.sys.id,
//         caption: d.fields.description,
//         url: `https:${d.fields.image.fields.file.url}`,
//       })),
//     },
//   };
// };


import React from "react";
import Hero from "../lib/components/Hero";
import Layout from "../lib/components/Layout";
import hero from "../lib/assets/carousel/BR RESORT MAIN FRONT PHOTO (1).jpg";
import FancyText from "../lib/components/FancyText";
import Head from "next/head";
import Image from "next/image";


import Image1 from "../lib/assets/carousel/BR RESORT MAIN FRONT PHOTO (1).jpg";
import Image2 from "../lib/assets/carousel/BR RESORT MAIN FRONT PHOTO (1).jpg";
import Image3 from "../lib/assets/carousel/BR RESORT MAIN FRONT PHOTO (1).jpg";
// Import other static images as needed...

const gallery = () => {
  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | Gallery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero src={hero} text="gallery" darken />
      <section className="w-full py-24">
        <FancyText bgText="pictures" className="my-12">
          Gallery
        </FancyText>
        <div className="m-auto flex flex-wrap justify-center relative w-11/12 md:w-4/5  mt-24 gap-4">
          <div className="flex flex-col items-center">
            <LoadImage url={Image1} caption="Caption 1" />
          </div>
          <div className="flex flex-col items-center">
            <LoadImage url={Image2} caption="Caption 2" />
          </div>
          <div className="flex flex-col items-center">
            <LoadImage url={Image3} caption="Caption 3" />
          </div>
          {/* Add more images as needed */}
        </div>
      </section>
    </Layout>
  );
};

export default gallery;

const LoadImage = ({ url, caption }: { url: any; caption: string }) => {
  return (
    <div className="w-60 h-60 relative">
      <Image src={url} width={300} height={300} layout="responsive" alt="Gallery Image" />
      <span className="w-full font-sans uppercase text-lg mt-2 text-center">{caption}</span>
    </div>
  );
};


