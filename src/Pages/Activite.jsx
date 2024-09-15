import React from "react";
import { useParams } from "react-router-dom";
const activities = [
  {
    id: 1,
    title: "Drawing Activity",
    description:
      "To bring out the hidden potentials of Deaf & hard of hearing children, and to develop their imagination power and understanding, children are trained in Drawing. They appear in elementary and intermediate Drawing exams, and participate in Drawing competitions at District, State, and National levels, receiving awards and medals.",
    photos: [
      "../assets/img/activity/drawing/d6.jpg",
      "../assets/img/activity/drawing/d7.jpg",
      "../assets/img/activity/drawing/d4.jpg",
      "../assets/img/activity/drawing/d5.jpg",
      "../assets/img/activity/drawing/d1.jpg",
      "../assets/img/activity/drawing/d2.jpg",
      "../assets/img/activity/drawing/d3.jpg",
    ],
  },
  {
    id: 2,
    title: "Art and Craft",
    description:
      "Art is a universal language that the heart understands. It is an expression of what the mind thinks, sees, and the heart feels. Activities include clay work, painting, card making, flower vases, glass painting, ceramics work, chalk making, candle making, stitching, embroidery, canvas, and Rangoli.",
    photos: [
      "../assets/img/activity/art/a1.jpg",
      "../assets/img/activity/art/a2.jpg",
      "../assets/img/activity/art/a3.jpg",
      "../assets/img/activity/art/aa1.jpg",
      "../assets/img/activity/art/aa2.jpg",
      "../assets/img/activity/art/aa3.jpg",
    ],
  },
  {
    id: 3,
    title: "Science",
    description:
      "When I hear I know, when I see I remember, when I do I understand. The science program includes various activities such as clay work, painting, card making, flower vases, glass painting, ceramics work, chalk making, candle making, stitching, embroidery, canvas, and Rangoli.",
    photos: [
      "../assets/img/activity/science/s1.jpg",
      "../assets/img/activity/science/s2.jpg",
      "../assets/img/activity/science/s3.jpg",
      "../assets/img/activity/science/s4.jpg",
    ],
  },
  {
    id: 4,
    title: "Physical Education",
    description:
      "A healthy mind in a healthy body. Physical Education focuses on acquiring knowledge and skills for regular physical activity, which is foundational for a healthy and productive life. Activities include regular exercises, individual and group games such as Volleyball, Cricket, Badminton, Kho-Kho, and Satodiyu. Children participate in state and national level sports & yoga competitions, bringing pride to the institution.",
    photos: [
      "../assets/img/activity/physical/p1.jpg",
      "../assets/img/activity/physical/p2.jpg",
      "../assets/img/activity/physical/p3.jpg",
      "../assets/img/activity/physical/p4.jpg",
    ],
  },
  {
    id: 5,
    title: "Cultural Programme",
    description:
      "Despite the challenges of tuning with music for Deaf children, our institution frequently organizes cultural programs to boost this activity. The institution has organized the 'Akhil Gujarat Deaf Dance Competition' since 1988.",
    photos: [
      "../assets/img/activity/cultural/c1.jpeg",
      "../assets/img/activity/cultural/c2.jpg",
      "../assets/img/activity/cultural/c3.jpeg",
      "../assets/img/activity/cultural/c4.jpeg",
    ],
  },
  {
    id: 6,
    title: "Field Trips - Tours",
    description:
      "Education through visual aids and project lessons are very effective for Deaf children. 'The World is their Classroom.' Therefore, visits to various places are arranged frequently, and picnics are organized for their entertainment.",
    photos: [
      "../assets/img/activity/trip/t1.jpeg",
      "../assets/img/activity/trip/t2.jpeg",
      "../assets/img/activity/trip/t3.jpeg",
      "../assets/img/activity/trip/tt1.JPG",
      "../assets/img/activity/trip/tt2.JPG",
    ],
  },
  {
    id: 7,
    title: "Medical Check-up",
    description:
      "Medical check-ups are organized for all school children once or twice a year with the help of specialist doctors. Regular health check-ups by ENT specialists are conducted, and audiograms are taken. Children who require hearing aids are provided with BTE (Behind The Ears) devices.",
    photos: [
      "../assets/img/activity/medical/m1.jpeg",
      "../assets/img/activity/medical/m2.jpeg",
      "../assets/img/activity/medical/m3.jpeg",
      "../assets/img/activity/medical/m4.jpeg",
    ],
  },
  {
    id: 8,
    title: "Festivals Celebrations",
    description:
      "As part of our Peace and Values Education Programme, we teach hearing-impaired students about different religions and festivals, and celebrate all in our school.",
    photos: [
      "../assets/img/activity/festival/f1.jpg",
      "../assets/img/activity/festival/f2.jpg",
      "../assets/img/activity/festival/f3.jpg",
      "../assets/img/activity/festival/f4.jpg",
    ],
  },
  {
    id: 9,
    title: "Work Shops",
    description:
      "Workshops are organized for parents, families, friends, and the wider community to improve communication with Deaf children. Sign language classes are offered to empower parents and create a healthier home atmosphere. Marriage and family counseling sessions are also available to promote the positive growth of the entire family.",
    photos: [],
  },
  {
    id: 10,
    title: "Language Development",
    description:
      "The language development program focuses on developing independent language and communication skills through speaking, reading, writing, rhythm and dance, art and craft, sports, games, drama, computer education, yoga, field trips, and other activities.",
    photos: [
      "../assets/img/activity/language/l1.jpeg",
      "../assets/img/activity/language/l2.jpeg",
      "../assets/img/activity/language/l3.jpeg",
      "../assets/img/activity/language/l4.jpeg",
    ],
  },
  {
    id: 11,
    title: "Theater Arts",
    description:
      "The theater program for hearing-impaired children promotes social and emotional growth, social skills development, literacy, academic improvement, speech and communication skills, and higher motivation to learn. Children gain the skills and confidence needed to succeed in school, interact with peers, and express themselves in their daily lives.",
    photos: [
      "../assets/img/activity/theaterart/t1.jpeg",
      "../assets/img/activity/theaterart/t2.jpeg",
      "../assets/img/activity/theaterart/t3.jpeg",
      "../assets/img/activity/theaterart/t4.jpeg",
    ],
  },
  {
    id: 12,
    title: "Lunch Time",
    description:
      "Lunch Time provides students with an opportunity to relax, socialize, and build friendships in a supportive and inclusive environment. It encourages peer interaction, enhances social skills, and gives students a break to recharge for the rest of the day’s activities. Special accommodations are made to ensure that all students, including those with hearing impairments, can engage comfortably and confidently.",
    photos: [
      "../assets/img/activity/lunchtime/l1.jpeg",
      "../assets/img/activity/lunchtime/l2.jpeg",
    ],
  },
  {
    id: 13,
    title: "Plantation",
    description:
      "The Plantation program introduces students to the joys and benefits of gardening and environmental stewardship. Through hands-on activities, students learn about plant growth, care, and the importance of sustainability. This program promotes teamwork, responsibility, and a connection to nature, all while enhancing students' practical skills and providing a calming, rewarding experience.",
    photos: [
      "../assets/img/activity/plantation/p1.jpeg",
      "../assets/img/activity/plantation/p2.jpeg",
    ],
  },
  {
    id: 14,
    title: "Sports Day",
    description:
      "Sports Day is a fun-filled event that encourages physical activity, teamwork, and healthy competition. Students participate in a variety of sports and games designed to be inclusive and accessible. This event promotes physical fitness, boosts self-confidence, and fosters a sense of community among students, all while ensuring that everyone can join in and enjoy the activities.",
    photos: [
      "../assets/img/activity/sportday/s1.jpeg",
      "../assets/img/activity/sportday/s2.jpeg",
      "../assets/img/activity/sportday/s3.jpeg",
      "../assets/img/activity/sportday/s4.jpeg",
      "../assets/img/activity/sportday/s5.jpeg",
      "../assets/img/activity/sportday/s6.jpeg",
      "../assets/img/activity/sportday/s7.jpeg",
      "../assets/img/activity/sportday/s8.jpeg",
      "../assets/img/activity/sportday/s9.jpeg",
    ],
  },
  {
    id: 15,
    title: "Sport Time",
    description:
      "Sport Time offers students an opportunity to engage in various sports and physical activities in a structured and supportive environment. This program focuses on developing physical skills, encouraging teamwork, and fostering a love for sports. Activities are designed to be inclusive and cater to all ability levels, ensuring that every student can participate and benefit from the experience.",
    photos: [
      "../assets/img/activity/sporttime/s1.jpeg",
      "../assets/img/activity/sporttime/s2.jpeg",
      "../assets/img/activity/sporttime/s3.jpeg",
      "../assets/img/activity/sporttime/s4.jpeg",
      "../assets/img/activity/sporttime/s5.jpeg",
      "../assets/img/activity/sporttime/s6.jpeg",
      "../assets/img/activity/sporttime/s7.jpeg",
    ],
  },
  {
    id: 16,
    title: "Corona Awareness Activity",
    description:
      "Promoting awareness and safety during the COVID-19 pandemic. This activity focuses on educating students about hygiene practices, social distancing, and the importance of vaccination. The school organized various online seminars, poster-making competitions, and interactive sessions to inform and empower students about the preventive measures. These efforts contributed to raising awareness at both the community and institutional levels.",
    photos: [
      "../assets/img/activity/corona/c1.jpg",
      "../assets/img/activity/corona/c2.jpg",
      "../assets/img/activity/corona/c3.jpg",
      "../assets/img/activity/corona/c4.jpg",
      "../assets/img/activity/corona/c5.jpg",
    ],
  },
];

const Activite = () => {
  const { itemId } = useParams(); // Access the itemId parameter

  let current = activities.find((item) => item.id === parseInt(itemId));
  if (!current) current = activities[0];

  return (
    <>
      <header>
        <div
          className="page-header min-height-400"
          style={{
            backgroundImage: `url('../assets/img/school/home/mook_dhwani_trust_-_building_photo (1).jpg')`,
          }}
          loading="lazy"
        >
          <span className="mask bg-gradient-dark opacity-8"></span>
        </div>
      </header>
      {/* section */}
      <div className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
        {/* <!-- START Testimonials w/ user image & text & info --> */}
        <section className="py-sm-7 py-5 position-relative">
          <div className="container">
            <div className="row">
              <div className="col-12 mx-auto">
                <div className="mt-n8 mt-md-n9 text-center">
                  <img
                    className="avatar avatar-xxl shadow-xl position-relative z-index-2"
                    src="../assets/img/kbv-logo-1.png"
                    alt="bruce"
                    loading="lazy"
                  />
                </div>
                <div className="row py-5">
                  <div className="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h3 className="mb-0">{current?.title}</h3>
                    </div>

                    <p className="text-lg mb-0">
                      {current?.description}
                      <br />
                      {/* <a
                        href="javascript:;"
                        className="text-info icon-move-right"
                      >
                        More about me
                        <i className="fas fa-arrow-right text-sm ms-1"></i>
                      </a> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-3">
          <div className="container">
            {/* <div className="row">
              <div className="col-lg-6">
                <h3 className="mb-5">Check my latest blogposts</h3>
              </div>
            </div> */}
            <div className="row">
              {current &&
                current?.photos &&
                current?.photos.map((item) => (
                  <div className="col-lg-3 col-sm-6 mt-4">
                    <div className="card card-plain">
                      <div className="card-header p-0 position-relative">
                        <a className="d-block blur-shadow-image">
                          <img
                            src={item}
                            alt={item}
                            className="img-fluid shadow border-radius-lg"
                            loading="lazy"
                          />
                        </a>
                      </div>
                      {/* <div className="card-body px-0">
                      <h5>
                        <a
                          href="javascript:;"
                          className="text-dark font-weight-bold"
                        >
                          MateLabs machine learning
                        </a>
                      </h5>
                      <p>
                        If you’ve ever wanted to train a machine learning model
                        and integrate it with IFTTT, you now can with ...
                      </p>
                      <a
                        href="javascript:;"
                        className="text-info text-sm icon-move-right"
                      >
                        Read More
                        <i className="fas fa-arrow-right text-xs ms-1"></i>
                      </a>
                    </div> */}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        {/* <!-- END Blogs w/ 4 cards w/ image & text & link --> */}
      </div>
    </>
  );
};

export default Activite;
