export default function About() {
  return (
    <section className="flex w-full h-[70vh]">
      <article className="w-1/2">
        <h3>Eva Lambert</h3>
        <p> is a graphic designer and creative developer based in Brussels.</p>
        <p>Currently available for a front-end internship.</p>
        <h3>Contact</h3>
        <p>Email</p>
        <p>Instagram</p>
      </article>
      <article className="w-1/2 flex flex-col">
        <section className="flex justify-between border-t-[1px] border-black">
          <h3>Skills</h3>
          <p>
            Master in Graphic Design at Hear Strasbourg & BeCode Bruxelles
            Training in web dev
          </p>
        </section>
        <section className="flex  justify-between border-t-[1px] border-black">
          <h3>Experience</h3>
          <p> Graphic Designer at Studio XYZ & Web Developer at Company ABC</p>
        </section>
        <section className="flex justify-between  border-t-[1px] border-black">
          <h3>Skills</h3>
          <p>  HTML, CSS, JavaScript, React, Typecript, Figma, Adobe Creative Suite</p>
        </section>
        <section className="flex justify-between border-t-[1px] border-black">
          <h3>Interests</h3>
          <p>Typography,Arts & Design </p>
        </section>
      </article>
    </section>
  );
}
