import React from "react";
import Layout from "../../lib/components/Layout";
import RoomCard from "../../lib/components/RoomCard";
import RoomLayout from "../../lib/components/RoomLayout";
import roomImg from "../../lib/assets/rooms/exec/photo_2022-01-17_15-34-36.jpg";
import { StaticImageData } from 'next/image';
import img1 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-44-53.jpg";
import img2 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-44-54.jpg";
import img3 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-45-07.jpg";
import img4 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-45-08 (2).jpg";
import img5 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-45-08.jpg";
import img6 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-45-09.jpg";
import img7 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-45-10 (2).jpg";
import img8 from "../../lib/assets/rooms/exec/images/photo_2022-01-30_18-45-10.jpg";
import Head from "next/head";
import Animate from "../../lib/components/Animate";
import RoomDetails, { Span } from "../../lib/components/RoomDetails";
import { icons, serviceIcons } from "../../lib/components/icons";
import Service from "../../lib/components/Service";

const ExecutiveRoom = () => {
  return (
    <Layout>
      <Head>
        <title>Bhimraj Resort | Executive Room</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <RoomLayout
        name="Executive"
        bg={roomImg}
        imgarr={[img8, img1, img2, img5, img6]}
      >
        <Animate animateIn="animate__fadeIn">
          <RoomCard
            link="/rooms/suite/"
            roomData={{
              caption: "A quality room with sea or mountain view",
              description:
                "Executive Room - Executive Room has a comfortable king size bed, a sitting, separate desk and bathroom.",
              rate: "₹2800/Night",
              title: "LUXURY EXECUTIVE ROOM",
            }}
            src={roomImg}
            learnMore={false}
          />
        </Animate>
        <RoomDetails
          longtext={[
            "Executive Room - Executive Room has a comfortable king size bed, a sitting, separate desk and bathroom.",

            "The rooms come with full amenities; Flat Screen TV, Wi-Fi,  air-conditioning,  and complimentary breakfast, and in room coffee & tea facilities.",
          ]}
          services={Object.keys(serviceIcons).map((service, index) => (
            <Span key={index} icon={serviceIcons[service].png} alt={serviceIcons[service].name}>
              {serviceIcons[service].description}
            </Span>
          ))}
          details={{
            "Bed": "King Size",
            "Occupancy": "2 Persons",
            "Bathroom": "Yes",
            "Cable TV": "Yes",
            "Air Conditioner": "Yes",
            "Compilmentary Tea/Coffee": "Yes"
          }}
          serviceIconsData={[
            icons.bath,
            icons.airconditioner,
            icons.phone,
            icons.tea,
            icons.tv,
            icons.wifi,
          ]}
          price={{
            single: "2200",
            double: "2800"
          }}
        />
      </RoomLayout>
    </Layout>
  );
};

export default ExecutiveRoom;
