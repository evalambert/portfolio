export default function About() {
  return (
    <article className="wrapper-about h-[90vh] flex flex-col pt-4 overflow-x-auto">
      <div className="wrapper-txt h-full md:w-1/2 flex flex-col gap-4">
        <section className="content-txt  flex flex-col gap-3">
          <p>
            I am a French graphic designer and creative web developer based in
            Brussels. After graduating with a Master’s degree in Graphic Design
            from HEAR, Strasbourg, in 2015, I have collaborated with cultural institutions, artists and others enthusiasts to develop visual identity, both
            printed and digital matter. Since 2022, I have been part
            of Greta Oto, a multidisciplinary graphic design studio, co-founded
            with Alice Cadillon, who is interested in the performative potential of graphic objects
          </p>
          <p>
            I am currently enhancing my web development skills at BeCode, and am seeking an internship opportunity starting in April.
          </p>
        </section>
        <section className="content-contact py-4 md:py-0">
          <h3>Contact</h3>
          <p>
            <a href="mailto:lamberteva@hotmail.fr">evalambert@hotmail.fr</a>
          </p>
          <p>
            <a href="https://www.instagram.com/greta.oto__/?hl=fr">
              @greta.oto__
            </a>
          </p>
        </section>
      </div>
      {/* <div className="wrapper-cv w-full md:w-1/2 flex flex-col">
          <section className="content-experience grid grid-cols-[80px_1fr] gap-4 border-t border-black">
            <h2>Experience</h2>
            <div>
              <section className=" grid grid-cols-[1fr_auto] gap-4">
                <div className="grid grid-cols-[auto_1fr] gap-2">
                  <p>•</p>
                  <p>Co-founder of Greta Oto, graphic design studio based in Brussel</p>
                </div>
                <p>2022</p>
              </section>
              <section className="grid grid-cols-[1fr_auto] gap-4">
                <div className="grid grid-cols-[auto_1fr] gap-2">
                  <p>•</p>
                  <p>Freelance graphic designer, Brussel</p>
                </div>
                <p>2015</p>
              </section>
            </div>
          </section>
          <section className="content-degrees grid grid-cols-[80px_1fr] gap-4 border-t border-black">
            <h2>Degrees</h2>
            <div>
              <section className="grid grid-cols-[1fr_auto] gap-4">
                <div className="grid grid-cols-[auto_1fr] gap-2">
                  <p>•</p>
                  <p>
                    Master‘s Degree in Graphic Communication, HEAR Strasbourg
                  </p>
                </div>
                <p>2015</p>
              </section>
              <section className="grid grid-cols-[1fr_auto] gap-4">
                <div className="grid grid-cols-[auto_1fr] gap-2">
                  <p>•</p>
                  <p>
                    Bachelor‘s degree in Visual Comminucation, HEAR Strasbourg
                  </p>
                </div>
                <p>2013</p>
              </section>
            </div>
          </section>
          <section className="content-training grid grid-cols-[80px_1fr] gap-4 border-t border-black">
            <h2>Training</h2>
            <div>
              <section className="grid grid-cols-[1fr_auto] gap-4">
                <div className="grid grid-cols-[auto_1fr] gap-2">
                  <p>•</p>
                  <p>Web development training at BeCode, Brussel</p>
                </div>
                <p>2024</p>
              </section>
              <section className="grid grid-cols-[1fr_auto] gap-4">
                <div className="grid grid-cols-[auto_1fr] gap-2">
                  <p>•</p>
                  <p>
                    Graphic Designer, DTP, web and motion design, Digital.city
                    Brussels
                  </p>
                </div>
                <p>2020</p>
              </section>
            </div>
          </section>
      </div> */}
    </article>
  );
}
