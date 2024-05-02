import React from "react";
import Layout from "../../lib/components/Layout";
import RoomCard from "../../lib/components/RoomCard";
import RoomLayout from "../../lib/components/RoomLayout";
// import roomImg from "../../lib/assets/rooms/deluxe/photo_2022-01-17_15-32-51.jpg";
// import roomImg from "../../lib/assets/rooms/maharaja/images/bg.jpeg";
// import roomImg from "../../lib/assets/new/gra.jpeg";

import roomImg from "../../lib/assets/new-room/grand/IMG_20240502_172240_022.jpg";


import img1 from "../../lib/assets/new-room/grand/IMG_20240502_172231_345.jpg";
import img2 from "../../lib/assets/new-room/grand/IMG_20240502_172233_498.jpg";
import img3 from "../../lib/assets/new-room/grand/IMG_20240502_172235_297.jpg";
import img4 from "../../lib/assets/new-room/grand/IMG_20240502_172240_022.jpg";

import img5 from "../../lib/assets/new-room/grand/IMG_20240502_172242_481.jpg";
import img6 from "../../lib/assets/new-room/grand/IMG_20240502_172237_401.jpg";

// import img6 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-15.jpg";
// import img7 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-16.jpg";


import Head from "next/head";
import Animate from "../../lib/components/Animate";
import RoomDetails, { Span } from "../../lib/components/RoomDetails";
import { icons, serviceIcons } from "../../lib/components/icons";
import Image from "next/image";

const grand = () => {
    return (
        <Layout>
          <Head>
            <title>Bhimraj Resort | Grand Executive</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          </Head>
          <RoomLayout
            name="Grand Executive"
            bg={roomImg}
            imgarr={[img1, img2, img3, img4, img5, img6]}
          >
            <Animate animateIn="animate__fadeIn">
              <RoomCard
                link="/rooms/suite/"
                roomData={{
                  caption: "A quality room with sea or mountain view",
                  description:
                    "The suite features a luxurious king-sized bed draped in the finest linens and adorned with lavish accents. Elegant touches such as ornate chandeliers and intricately carved furnishings evoke a sense of timeless refinement.",
                  rate: "₹3500/Night",
                  title: "Grand Executive Room",
                }}
                src={roomImg}
                learnMore={false}
              />
            </Animate>
            <RoomDetails
              longtext={[
                "The suite features a luxurious king-sized bed draped in the finest linens and adorned with lavish accents. Elegant touches such as ornate chandeliers and intricately carved furnishings evoke a sense of timeless refinement. Indulge in the ultimate relaxation with a lavish bathroom, featuring premium amenities. Unwind in style and comfort within the confines of your private sanctuary",
                "Experience unparalleled luxury and impeccable hospitality in our Royal Grand Executive Suite where every detail is designed to exceed your expectations.",
              ]}
              services={Object.keys(serviceIcons).map((service, index) => (
                <Span
                  key={index}
                  icon={serviceIcons[service].png}
                  alt={serviceIcons[service].name}
                >
                  {serviceIcons[service].description}
                </Span>
              ))}
              details={{
                Bed: "Single Twin Size",
                Occupancy: "2 Persons",
                Bathroom: "Yes",
                "Cable TV": "Yes",
                "Air Conditioner": "Yes",
                "view" : "Garden",
              }}
              serviceIconsData={[
                icons.bath,
                icons.airconditioner,
                icons.phone,
                icons.tv,
                
                // icons.wifi,
              ]}
              price={{
                double: "6000",
                single: "6000",
              }}
            />
          </RoomLayout>
        </Layout>
      );
}

export default grand;