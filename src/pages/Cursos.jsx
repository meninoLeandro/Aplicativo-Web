export default function Cursos() {
  const cursos = [
    {
      titulo: "Desenvolvimento Web",
      descricao:
        "Aprenda a criar sites e aplicações modernas com HTML, CSS, JavaScript e React.",
      nivel: "Iniciante",
      carga: "40 horas",
      destaque: "Mais procurado",
    },
    {
      titulo: "Design Gráfico",
      descricao:
        "Desenvolva identidade visual, peças para redes sociais e projetos profissionais.",
      nivel: "Todos os níveis",
      carga: "32 horas",
      destaque: "Criatividade",
    },
    {
      titulo: "Ciências Jurídicas e Sociais",
      descricao:
        "Domine conteúdo, redes sociais, campanhas e estratégias para crescer na internet.",
      nivel: "Iniciante",
      carga: "48 horas",
      destaque: "Alta demanda",
    },
    {
      titulo: "Medicina",
      descricao:
        "Domine conteúdo, redes sociais, campanhas e estratégias para crescer na internet.",
      nivel: "Avançado",
      carga: "50 horas",
      destaque: "Alta demanda",
    },
    {
      titulo: "Bacharelado em Pedagogia",
      descricao:
        "Torne-se uma pessoa essencial para a área da educação, seja um bom profissional para docência e gestão escolar.",
      nivel: "Avançado",
      carga: "30 horas",
      destaque: "Alta demanda",
    },
    {
      titulo: "Engenharia Civil",
      descricao:
        "Torne-se um engenheiro civil renomado e de sucesso.",
      nivel: "Intermediário",
      carga: "35 horas",
      destaque: "Alta demanda",
    },
    {
      titulo: "Engenharia Elétrica",
      descricao:
        "Torne-se um engenheiro civil renomado e de sucesso.",
      nivel: "Intermediário",
      carga: "44 horas",
      destaque: "Alta demanda",
    },
  ];

  return (
    <section className="landing-cursos">
      <div className="hero-cursos">
        <p className="eyebrow">Invista no seu futuro</p>
        <h1>Escolha o curso que vai transformar sua carreira</h1>
        <p>
          Conteúdo prático, aprendizado no seu ritmo e uma comunidade preparada
          para apoiar cada etapa da sua jornada.
        </p>
        <a className="botao-hero" href="#lista-cursos">Ver cursos</a>
      </div>

      <div className="beneficios" aria-label="Diferenciais">
        <div><strong>7</strong><span>cursos disponíveis</span></div>
        <div><strong>100%</strong><span>online e flexível</span></div>
        <div><strong>Projeto</strong><span>prático em cada trilha</span></div>
      </div>

      <div className="cabecalho-cursos" id="lista-cursos">
        <p className="eyebrow">Nossa seleção</p>
        <h2>Encontre seu próximo passo</h2>
      </div>

      <div className="grade-cursos">
        {cursos.map((curso) => (
          <article className="card-curso" key={curso.titulo}>
            <span className="tag-curso">{curso.destaque}</span>
            <h3>{curso.titulo}</h3>
            <p>{curso.descricao}</p>
            <div className="meta-curso">
              <span>{curso.nivel}</span>
              <span>{curso.carga}</span>
            </div>
            <a className="botao-curso" href="/cadastro">Quero me inscrever</a>
          </article>
        ))}
      </div>
    </section>
  );
}