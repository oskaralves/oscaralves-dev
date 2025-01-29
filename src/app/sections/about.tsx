export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-[700px] w-full flex-col bg-background/20 bg-[url('/images/img-about.png')] bg-cover bg-right-top pb-24 pt-12 md:min-h-[calc(100vh-68px)]"
    >
      <div className="container space-y-6">
        <div className="grid grid-cols-1 items-start justify-items-center gap-4 lg:grid-cols-3">
          <div className="col-span-2 flex flex-col space-y-10 md:pr-24">
            <h2 className="text-5xl font-light lg:text-7xl lg:font-extralight">
              Sobre
            </h2>
            <p className="text-lg leading-8 opacity-70">
              Sou Engenheiro de Software Full Stack com mais de 15 anos de
              experiência em desenvolvimento de software. Minha trajetória é
              marcada pela combinação de habilidades técnicas, um olhar
              estratégico para design e uma compreensão aprofundada de negócios,
              que me permite criar soluções tecnológicas, performáticas e de
              impacto.
            </p>

            <p className="text-lg leading-8 opacity-70">
              Em 2012, co-fundei a IVEStudio (Inside the Visual Experiences),
              onde atuei como diretor de criação, designer e desenvolvedor
              frontend. Um dos produtos mais relevantes da empresa foi o
              desenvolvimento de uma plataforma (mobile e web) que conectava
              passageiros a taxistas, oferecendo gestão administrativa e
              financeira de cooperativas, competindo com empresas como Taxibeat
              e EasyTaxi no Rio de Janeiro.
            </p>

            <p className="text-lg leading-8 opacity-70">
              Em 2018, co-fundei a Bitbeer, uma plataforma SaaS voltada para o
              mercado de cervejas artesanais. Atuei em todas as etapas do
              desenvolvimento, liderando a criação de um aplicativo mobile para
              clientes e lojistas, desenvolvido com Ionic e Angular, além de um
              painel administrativo para gestão de pedidos e operações,
              construído utilizando Angular, C# .NET Core, ElasticSearch e
              PostgreSQL. A plataforma foi projetada para ser funcional e
              escalável, incorporando funcionalidades avançadas, como catálogo
              de produtos detalhado que correlacionava com as preferências de
              cada perfil de usuário, integração com serviços de delivery,
              sistema de cupons de desconto e modulo de pagamento.
            </p>

            <p className="text-lg leading-8 opacity-70">
              Entre 2021 e 2024, refinei minhas habilidades em tecnologias
              modernas e desenvolvi muita autonomia em gestão de projetos. Tenho
              enorme facilidade em aprender e estou sempre me aperfeiçoando, com
              o objetivo de criar soluções que impactem positivamente negócios e
              pessoas.
            </p>
          </div>
          {/* <div className="min-w-full border border-primary bg-white/30 p-12 dark:bg-black/30 md:col-span-1">
            <Image
              src="/images/img-about.jpg"
              className="block w-full opacity-35 "
              alt=""
              width={780}
              height={1783}
              unoptimized
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};
