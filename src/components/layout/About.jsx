export default function About() {
  return (
    <article className="wrapper-about w-full h-[70vh] flex flex-col md:flex-row pt-3 gap-4 overflow-x-auto">
      <div className="wrapper-txt w-full h-full md:w-1/2 flex flex-col gap-4 justify-between">
        <section className="content-txt  flex flex-col gap-4">
          <p>
            French graphic designer and web developer based in Brussels,
            Belgium.
          </p>
          <p>
            Since earning my Master's degree in Visual Communication from HEAR,
            Strasbourg in 2015, I have created visual identities, websites,
            posters, editions, type designs, and artworks in collaboration with
            cultural institutions, artists, businesses, and other enthusiasts.
            Since 2022, I have been working under the name Greta Oto, a
            multidisciplinary graphic design studio co-founded with Alice
            Cadillon.
          </p>
          <p>
            Currently in web development training at BeCode, available for an
            internship at a company starting in April. For more information,
            please get in touch.
          </p>
        </section>
        <section className="content-contact py-4 md:py-0">
          <p className="flex gap-2">
            ↗<a href="mailto:lamberteva@hotmail.fr">Email,</a>
            <a href="https://www.instagram.com/greta.oto__/?hl=fr">
              Instagram,
            </a>
            <a href="https://www.instagram.com/eva___lambert/">GitHub</a>
          </p>
        </section>
      </div>

      <div className="wrapper-cv w-full md:w-1/2 flex flex-col">
        <section className="content-experience grid grid-cols-[80px_1fr] gap-4 border-t border-black">
        <h2>Experience</h2>
          <div>
            <section className=" grid grid-cols-[1fr_auto] gap-4">
              <div className="grid grid-cols-[auto_1fr] gap-2">
                <p>→</p>
                <p>
                  Co-founder of Greta Oto, a multidisciplinary graphic design
                  studio
                </p>
              </div>
              <p>2022</p>
            </section>
            <section className="grid grid-cols-[1fr_auto] gap-4">
              <div className="grid grid-cols-[auto_1fr] gap-2">
                <p>→</p>
                <p>Freelance graphic designer</p>
              </div>
              <p>2015</p>
            </section>
          </div>
        </section>
        <section className="content-degrees grid grid-cols-[80px_1fr] gap-4 border-t border-black">
          <h2>Degrees</h2>
          <div>
            <section className=" grid grid-cols-[1fr_auto] gap-4">
              <div className="grid grid-cols-[auto_1fr] gap-2">
                <p>→</p>
                <p>Master's Degree in Graphic Communication, HEAR Strasbourg</p>
              </div>
              <p>2015</p>
            </section>
            <section className="grid grid-cols-[1fr_auto] gap-4">
              <div className="grid grid-cols-[auto_1fr] gap-2">
                <p>→</p>
                <p>
                  Bachelor's degree in Visual Comminucation, HEAR Strasbourg
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
                <p>→</p>
                <p>Web development training at BeCode</p>
              </div>
              <p>2024</p>
            </section>
            <section className="grid grid-cols-[1fr_auto] gap-4">
              <div className="grid grid-cols-[auto_1fr] gap-2">
                <p>→</p>
                <p>
                  Graphic Designer, DTP, web and motion design, Digital.city Brussels
                </p>
              </div>
              <p>2020</p>
            </section>
          </div>
        </section>
      </div>
    </article>
  );
}
