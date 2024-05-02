import React from "react";
import Layout from "../../lib/components/Layout";
import RoomCard from "../../lib/components/RoomCard";
import RoomLayout from "../../lib/components/RoomLayout";
// import roomImg from "../../lib/assets/rooms/deluxe/photo_2022-01-17_15-32-51.jpg";

// import roomImg from "../../lib/assets/rooms/deluxe/photo_2022-01-17_15-32-51.jpg";

// import roomImg from "../../lib/assets/new/maha.jpeg";
import roomImg from "../../lib/assets/new-room/maharaja/IMG_20240502_172119_449.jpg";


// import img1 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-12 (2).jpg";
// import img2 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-12.jpg";
// import img3 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-13.jpg";
// import img4 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-14 (2).jpg";

// import img5 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-14.jpg";
// import img6 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-15.jpg";
// import img7 from "../../lib/assets/rooms/deluxe/images/photo_2022-01-30_18-44-16.jpg";

import img1 from "../../lib/assets/new-room/maharaja/IMG_20240502_172138_311.jpg";
import img2 from "../../lib/assets/new-room/maharaja/IMG_20240502_172130_629.jpg";

import img7 from "../../lib/assets/new-room/maharaja/IMG_20240502_172128_775.jpg";

import img4 from "../../lib/assets/new-room/maharaja/IMG_20240502_172126_162.jpg";

import img5 from "../../lib/assets/new-room/maharaja/IMG_20240502_172123_385.jpg";
import img6 from "../../lib/assets/new-room/maharaja/IMG_20240502_172121_561.jpg";

import img3 from "../../lib/assets/new-room/maharaja/IMG_20240502_172119_449.jpg";

import img8 from "../../lib/assets/new-room/maharaja/IMG_20240502_172116_252.jpg";



import Head from "next/head";
import Animate from "../../lib/components/Animate";
import RoomDetails, { Span } from "../../lib/components/RoomDetails";
import { icons, serviceIcons } from "../../lib/components/icons";
import Image from "next/image";

const maharaja = () => {
    return (
        <Layout>
          <Head>
            <title>Bhimraj Resort | Maharaja Suite Room</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          </Head>
          <RoomLayout
            name="Maharaja Suite"
            bg={roomImg}
            imgarr={[img1, img2, img3, img4, img5, img6, img7, img8]}
          >
            <Animate animateIn="animate__fadeIn">
              <RoomCard
                link="/rooms/suite/"
                roomData={{
                  caption: " Step into the lavish world of our Maharaja Suite, where luxury and opulence converge to create an unforgettable experience. Adorned with intricate designs and rich fabrics, this suite exudes regal elegance at every turn.",
                  description:
                    "Maharaja suit - The highlight of the suite is undoubtedly the private balcony, offering sweeping views of the surrounding landscape. Guests can unwind in the beautiful bathtub, as you sink into the warm, bubbling water, your gaze is drawn to the breathtaking view beyond the glass while taking in the breathtaking bath .",
                  rate: "₹6000/Night",
                  title: "MAHARAJA SUITE ROOM",
                }}
                src={roomImg}
                learnMore={false}
              />
            </Animate>
            <RoomDetails
              longtext={[
                "The highlight of the suite is undoubtedly the private balcony, offering sweeping views of the surrounding landscape. Guests can unwind in the beautiful bathtub, as you sink into the warm, bubbling water, your gaze is drawn to the breathtaking view beyond the glass while taking in the breathtaking bath .",
                "Every aspect of the Maharaja Suite is designed to exceed the expectations of even the most discerning traveler. Experience the pinnacle of luxury and hospitality in our exquisite Maharaja Suite.",
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
                "view" : "Garden & pool",
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

export default maharaja;