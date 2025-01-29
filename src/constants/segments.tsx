import {
  CloudServerIcon,
  DatabaseIcon,
  MobileProgramming01Icon,
  PackageIcon,
  SourceCodeIcon,
  TestTube01Icon,
  WebDesign02Icon,
} from 'hugeicons-react';

export const segments = [
  {
    id: 'frontend',
    icon: (
      <WebDesign02Icon className="h-10 w-10 text-primary" strokeWidth={0.5} />
    ),
    title: 'Front end',
    description:
      'Criação de interfaces de usuário dinâmicas, acessíveis e responsivas, com foco em desempenho, manutenção eficiente e experiência intuitiva para os usuários.',
  },
  {
    id: 'backend',
    icon: (
      <SourceCodeIcon className="h-10 w-10 text-primary" strokeWidth={0.5} />
    ),
    title: 'Back end',
    description:
      'Desenvolvimento de sistemas robustos, escaláveis e seguros, garantindo eficiência, modularidade e integração fluida entre serviços e dados.',
  },
  {
    id: 'mobile',
    icon: (
      <MobileProgramming01Icon
        className="h-10 w-10 text-primary"
        strokeWidth={0.5}
      />
    ),
    title: 'Mobile',
    description:
      'Desenvolvimento de aplicativos mobile modernos e performáticos utilizando tecnologias líderes que me permitem a criação de experiências nativas e responsivas para projetos híbridos, garantindo flexibilidade e qualidade em soluções multiplataforma.',
  },
  {
    id: 'test',
    icon: (
      <TestTube01Icon className="h-10 w-10 text-primary" strokeWidth={0.5} />
    ),
    title: 'Test',
    description:
      'Experiência em criação e implementação de testes automatizados para garantir a qualidade e confiabilidade do código. Conhecimento em ferramentas e bibliotecas voltadas para testes unitários, de integração e end-to-end, promovendo estabilidade e confiança no ciclo de desenvolvimento.',
  },
  {
    id: 'database',
    icon: <DatabaseIcon className="h-10 w-10 text-primary" strokeWidth={0.5} />,
    title: 'Database',
    description:
      'Conhecimento avançado no design, gerenciamento e otimização de bancos de dados relacionais e não relacionais, garantindo desempenho, segurança e escalabilidade no armazenamento e recuperação de dados.',
  },
  {
    id: 'devops',
    icon: (
      <CloudServerIcon className="h-10 w-10 text-primary" strokeWidth={0.5} />
    ),
    title: 'DevOps',
    description:
      'Implementação de práticas e ferramentas que conectam desenvolvimento e operações, promovendo automação, integração contínua, entrega rápida e monitoramento eficiente para garantir sistemas confiáveis e de alto desempenho.',
  },
  {
    id: 'libs',
    icon: <PackageIcon className="h-10 w-10 text-primary" strokeWidth={0.5} />,
    title: 'Principais Libs',
    description:
      'Especialização em bibliotecas amplamente utilizadas no mercado, essenciais para otimizar fluxos de trabalho, lidar com dados, gerenciar estados, integrar funcionalidades avançadas em projetos modernos, etc.',
  },
];
