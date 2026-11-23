export default function Inicio() {
  return (
    <section className="inicio">
      <div className="inicio-copy">
        <p className="eyebrow">Educação que abre caminhos</p>
        <h1>Construa o futuro que você deseja.</h1>
        <p className="inicio-lead">
          Aprenda com conteúdo atualizado, projetos práticos e uma comunidade
          preparada para apoiar sua evolução profissional.
        </p>
        <div className="inicio-actions">
          <a className="botao-hero" href="/cursos">Explorar cursos</a>
          <a className="botao-secundario" href="/cadastro">Criar minha conta</a>
        </div>
      </div>
      <div className="inicio-visual" aria-label="Indicadores da plataforma">
        <div className="visual-card visual-card-main">
          <span>Alunos em formação</span>
          <strong>+2.500</strong>
          <div className="progress-track"><span /></div>
        </div>
        <div className="visual-card">
          <span>Aulas práticas</span>
          <strong>160+</strong>
        </div>
        <div className="visual-card">
          <span>Trilhas completas</span>
          <strong>7</strong>
        </div>
      </div>
    </section>
  );
}