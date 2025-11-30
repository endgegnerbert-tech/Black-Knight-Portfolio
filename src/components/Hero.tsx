export default function Hero() {
  return (
   <section id="hero" className="min-h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
                <h2 className="text-6xl font-bold mb-4">Black Knights Portfolio</h2>
                <p className="text-2xl text-gray-400">Creative Developer 17 Jahre</p>
            </div>
            <div id="Aboutme" className="text-lg text-gray-300 leading-relaxed">
                <p>Hi, I am <b className="text-white">Einar</b>, a passionate 17-year-old creative developer from Germany.
                <br /> My mission is to combine technology with original design to build inspiring interactive web experiences.
                <br />I am currently mastering JavaScript, CSS, and 3D with three.js, aiming to reach professional level before graduation.
                <br />Driven by curiosity, discipline, and a love for new challenges.
                <br /> I am  already building my portfolio and preparing for freelance projects before finishing school</p>
            </div>
        </div>
   </section>
  )
}