const literatureList = [
  {
    title: 'Testing dot.com Savin',
    link: 'https://codernet.ru/books/qa/testirovanie_dot_com_roman_savin_2007/',
  },
  {
    title: 'A mental hospital in the hands of patients.',
    link: 'http://fundassist.flinders.edu.au/uploads/docs/WA_QA_Framework.pdf',
  },
  {
    title: 'Scrum. J. Sutherland.',
    link:
      "https://www.researchgate.net/publication/301685699_Jeff_Sutherland's_Scrum_Handbook",
  },
];

const resourcesList = [
  { title: 'dou.ua', link: 'https://dou.ua/forums/tags/QA/' },
  { title: 'Habr', link: 'https://qna.habr.com/q/118099' },
  {
    title: 'facebook.com/QA',
    link: 'https://www.facebook.com/groups/int.qa.comm/',
  },
  { title: 'goit.ua', link: 'https://goit.ua/kiev/qa/index.html' },
];

const UsefulView = () => {
  return (
    <section className="section container useful">
      <div className="useful-box">
        <h2 className="useful-title">Useful literature</h2>
        <ol className="useful-list">
          {literatureList.map((el, i) => {
            return (
              <li className="useful-item" key={`lit-${i}`}>
                <a
                  href={el.link}
                  className="useful-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {el.title}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="useful-box">
        <h2 className="useful-title">Useful resources</h2>
        <ol className="useful-list">
          {resourcesList.map((el, i) => {
            return (
              <li className="useful-item" key={`res-${i}`}>
                <a
                  href={el.link}
                  className="useful-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {el.title}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default UsefulView;
