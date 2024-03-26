export default function About() {
  return (
    <article className="w-full h-[calc(100dvh-55px)] md:h-[calc(100dvh-105px)] flex flex-col pt-4 overflow-x-auto">
      <div className="md:w-1/2 h-full flex flex-col gap-4 justify-between">
        <section className="flex flex-col gap-3">
          <p>
            I am a French graphic designer and creative web developer based in
            Brussels. After graduating with a Masters degree in Graphic Design
            from HEAR Strasbourg in 2015, I have collaborated with cultural
            institutions, artists, and other enthusiasts to develop websites,
            create visual identities, posters, editions, type designs… Since 2022, I have been part of
            <a
              className="ml-2"
              href="https://www.instagram.com/greta.oto__/?hl=fr"
              target="_blank"
              rel="noreferrer"
            >
              Greta Oto
            </a>
            , a multidisciplinary graphic design studio co-founded with Alice
            Cadillon, who is interested in the performative potential of graphic
            objects.
          </p>
          <p>
            I am currently enhancing my web development skills at BeCode, and am seeking an internship opportunity starting in April.
          </p>
        </section>
        <section>
          <div className="flex gap-4">
            <p className="flex gap-2">
              ↘
              <a
                href="mailto:lamberteva@hotmail.fr"
                target="_blank"
                rel="noreferrer"
              >
                Email,
              </a>
              <a
                href="https://github.com/evalambert"
                target="_blank"
                rel="noreferrer"
              >
                GitHub,
              </a>
              <a
                href="https://www.linkedin.com/in/eva-lambert-38602a8b/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
