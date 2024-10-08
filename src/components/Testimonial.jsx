import React from 'react';

export default function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 pt-10 pb-32 lg:px-8">
      <div className="mx-auto text-center py-5">
        <h3 className="text-lg text-sky-700 font-bold">~~ MENTOR INCUBATOR ~~</h3>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {/* Logo Images */}
          {[
            "channels4_profile.jpg",
            "Logo-500x.jpg",
            "Logo.jpg",
            "MEITY-STARTUP-_Final-File_27092019-768x614.png",
            "Orissajobsorg.gif",
            "R (1).png",
            "R (2).png",
            "R.png",
          ].map((imgSrc, idx) => (
            <div className="flex-shrink-0" key={idx}>
              <img src={`img/img/logo/${imgSrc}`} alt={`logo-${idx}`} className="w-24 h-24 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      {/* Testimonial Block */}
      <div className="mx-auto max-w-2xl lg:max-w-4xl mt-32">
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              "We’re here to transform your water quality management with our advanced robotic technology and data solutions. Our innovative USVs and real-time analytics help you monitor, manage, and improve water quality efficiently, reducing costs and enhancing decision-making. Thank you for choosing us to support your environmental goals."
            </p>
          </blockquote>
          <figcaption className="mt-10 ">
            <img className="mx-auto h-10 w-10 rounded-full" src="img/img/CEO.jpeg" alt="CEO" />
            <div className="mt-4 grid items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">SALOMI DABRAL</div>
              
              <div className="text-gray-600 flex"><svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>CEO of Vertox</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
