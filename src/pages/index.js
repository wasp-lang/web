import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import CodeBlockWithTitle from '../components/CodeBlockWithTitle'
import EmailSignupForm from '../components/EmailSignupForm/index.js'
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Quick start',
    //imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Create a production-ready web app from scratch with only a few lines
        of concise, declarative code.
      </>
    ),
  },
  {
    title: 'Flexible',
    //imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Move fast using high-level constructs provided by Wasp or
      drop down to <code>js/html/css...</code> when you require more control.
      </>
    ),
  },
  {
    title: 'No lock-in',
    //imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        If Wasp becomes too limiting for you, simply eject and continue with the source code
        following industry best-practices, as if it was handwritten by a senior engineer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function PageBreakWithLogo() {
  return (
    <section className={'section-lg'}>
      <div className="container"
           style={{ textAlign: 'center' }}>
        <img className="logo" src="img/eqpar-separator.png"/>
      </div>
    </section>
  )
}

function CodeExamples() {
  const CodeExample = Object.freeze({
    NEW_APP: 'Create a new app',
    DEFINE_ENTITY: 'Define and query a data model',
    ADD_AUTH: 'Add authentication'
  })

  const getButtonTextForCodeExample = (codeExample) => CodeExample[codeExample]

  const [currentCodeExample, setCodeExample] = useState(CodeExample.NEW_APP)

  function CurrentCodeExample() {
    if (currentCodeExample === CodeExample.NEW_APP) {
    const createAppWaspCode =
`app todoApp {
  title: "ToDo App"
}

route "/" -> page Main
page Main {
  component: import Main from "@ext/Main"
}
`

    const createAppMainComponentCode =
`import React from 'react'

export default () => <span> Hello World! </span>
`
      return (
        <div className="codeExampleFiles">
          <CodeBlockWithTitle title="todoApp.wasp" language="css">
            { createAppWaspCode }
          </CodeBlockWithTitle>

          <CodeBlockWithTitle title="ext/Main.js" language="jsx">
            { createAppMainComponentCode }
          </CodeBlockWithTitle>

          <div>
            That's it, this is the whole app! Run <code>wasp start</code> and check it out
            at <code>http://localhost:3000</code>!
          </div>
        </div>
      )
    } else if (currentCodeExample === CodeExample.ADD_AUTH) {
    const exampleCode =
`app todoApp {
  title: "ToDo App"
}

route "/" -> page Main
page Main {
  component: import Main from "@ext/Main"
}

auth {
  userEntity: User,
  methods: [ EmailAndPassword ]
}

entity User {=psl
    id          Int     @id @default(autoincrement())
    email       String  @unique
    password    String
psl=}
`

      const mainUsingAuthCode =
`import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '@wasp/auth/useAuth.js'
import Todo from './Todo.js'

export default () => {
  const { data: user } = useAuth()

  if (!user) {
    return <span>
             Please login or signup <Link to='/login'>here</Link>.
           </span>
  } else {
    return <Todo/>
  }
}
`
      return (
        <div className="codeExampleFiles">
          <CodeBlockWithTitle title="todoApp.wasp" language="css">
            { exampleCode }
          </CodeBlockWithTitle>
          <CodeBlockWithTitle title="ext/Main.js" language="jsx">
            { mainUsingAuthCode }
          </CodeBlockWithTitle>

          <div>
            To learn more about authentication & authorization in Wasp, check
            the <Link to={useBaseUrl('/docs/language/basic-elements#authentication--authorization')}>docs</Link>.
          </div>
        </div>
      )
    } else if (currentCodeExample === CodeExample.DEFINE_ENTITY) {
      const defineEntityWaspCode =
`//...

entity Task {=psl
    id          Int     @id @default(autoincrement())
    description String
    isDone      Boolean @default(false)
psl=}

query getTasks {
  fn: import { getTasks } from "@ext/queries.js",
  entities: [Task] // A list of entities this query uses.
}
`
      const getTasksQueryCode =
`export const getTasks = async (args, context) => {
  return context.entities.Task.findMany()
}
`
      const todoUsingGetTasksCode =
`import React from 'react'
import { useQuery } from '@wasp/queries'
import getTasks from '@wasp/queries/getTasks.js'

export default () => {
  const { data: tasks } = useQuery(getTasks)
  return <Tasks tasks={tasks}/>
}
`
      return (
        <div className="codeExampleFiles">
          <CodeBlockWithTitle title="todoApp.wasp" language="css">
            { defineEntityWaspCode }
          </CodeBlockWithTitle>
          <CodeBlockWithTitle title="ext/queries.js" language="jsx">
            { getTasksQueryCode }
          </CodeBlockWithTitle>
          <CodeBlockWithTitle title="ext/Todo.js" language="jsx">
            { todoUsingGetTasksCode }
          </CodeBlockWithTitle>

          <div>
            To learn more about working with data in Wasp, check
            the <Link to={useBaseUrl('/docs/language/language/basic-elements#entity')}>docs</Link>.
          </div>
        </div>
      )
    } else {
      console.log('this should never happen.')
      return null
    }
  }

  function Buttons() {

    function Button({ codeExampleKey }) {
      return (
        <button
          className={clsx('button',
            'info', 
            currentCodeExample === CodeExample[codeExampleKey] && 'is-active',
            'button--secondary'
          )}
          onClick={() => setCodeExample(CodeExample[codeExampleKey])}
        >
          { getButtonTextForCodeExample(codeExampleKey) }
        </button>
      )
    }

    return (
      Object.keys(CodeExample).map(k => <Button codeExampleKey={k}/>)
    )
  }

  return (
    <div className="row CodeExamples">
      <div className="ButtonTabs col col--3">
        <div>
          <Buttons/>
        </div>
      </div>

      <div className="col col--9">
        <CurrentCodeExample/>
      </div>
    </div>
  )
}

function WaspGhStarsCount() {
  return (
    <iframe
        src="https://ghbtns.com/github-btn.html?user=wasp-lang&repo=wasp&type=star&count=true&size=large" 
        frameborder="0"
        scrolling="0"
        width="160px" height="30px">
    </iframe>
  )
}

function EmailAndGithubCta() {
  return (
    <section className={'section-lg'} id="signup">
      <div className="container">

        <div className={clsx('row', styles.responsiveCentered)}>
          <div className="col col--10 col--offset-1">
            <h2>Stay up to date</h2>
            <h3>
              <p>
                Join our mailing list and be the first to know when we ship new features
                and updates!
              </p>
            </h3>
          </div>
        </div>

        <div className={clsx('row', styles.responsiveCentered)} style={{ paddingTop: '1rem' }}>
          <div className="col col--8 col--offset-2">
            <EmailSignupForm/>
          </div>
        </div>

        <div className={clsx('row', styles.responsiveCentered, 'section-text')}>
          <div className="col col--10 col--offset-1">
            <h3>
              <p>
                Also, make sure to check
                out <Link to={'https://github.com/wasp-lang/wasp'}>Wasp repo
                on Github</Link> and express your support by
                giving us a star!
              </p>
            </h3>
          </div>
        </div>

        <div className={clsx('row', styles.responsiveCentered)} style={{ paddingTop: '1rem' }}>
          <div className="col">
            <WaspGhStarsCount/>
          </div>
        </div>

      </div>
    </section>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const todoTutorialUrl = useBaseUrl('docs/tutorials/todo-app');

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero-title">Web App Specification Language</h1>
          <p className="hero-subtitle">{siteConfig.tagline}</p>

          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.heroButton,
              )}
              to={useBaseUrl('docs/tutorials/getting-started')}>
              Get Started
            </Link>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.heroButton,
              )}
              to={todoTutorialUrl}>
              Take the Tutorial
            </Link>
            <WaspGhStarsCount/>
          </div>

        </div>
      </header>

      <main>

        {/* One-line explanation */}
        <section className={'section-lg'}>
          <div className="container">
            <div className={clsx('row', styles.responsiveCentered)}>
              <div className="col col--10 col--offset-1">
                <h3 className={'title'}>
                  Wasp is a <span className="title-strong">declarative language</span> for building&nbsp;
                  <span className="title-strong">full-stack web apps</span> with less code.
                </h3>
                <h3>
                  <p>Front-end, back-end and deployment - all in one concise DSL.</p>
                </h3>
              </div>
            </div>
          </div>
        </section>

        <PageBreakWithLogo/>

        {/* Wasp compilation */}
        <section className={'section-lg'} id="how-it-works">
          <div className="container">

            <div className={clsx('row', styles.responsiveCentered)}>
              <div className="col col--10 col--offset-1">
                <h2>How it works</h2>
                <h3>
                  <p>
                    Given <code>.wasp</code> files as an input, Wasp generates the full source code of your
                    web app - front-end, back-end and deployment.
                  </p>
                  <p>
                    Wasp is used along with files written in standard web technologies - <code>.js(x)</code>,
                    <code>.css</code>, ...
                  </p>
                </h3>
              </div>
            </div>

            <div className={clsx('row', styles.responsiveCentered)} style={{ paddingTop: '2rem' }}>
              <div className="col">
                <img
                  className={'wasp-diagram'}
                  src="img/wasp-compilation.png"
                  alt="Wasp compilation"
                />
              </div>
            </div>

          </div>
        </section>
         
        <PageBreakWithLogo/>

        {/* Features */}
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

        <PageBreakWithLogo/>

        {/* The language */}
        <section className={'section-lg'} id="the-language">
          <div className="container">

            <div className={clsx('row', styles.responsiveCentered)}>
              <div className="col col--10 col--offset-1">
                <h2>The Language</h2>
                <h3>
                  <p>
                    Concepts such as <em>app</em>, <em>page</em>, <em>route</em>, <em>auth</em>&nbsp;
                    etc. are baked into Wasp, providing the
                    higher level of expressiveness.
                  </p>
                </h3>
              </div>
            </div>

            <CodeExamples/>

          </div>
        </section>

        {/* Take the tutorial */}
        <section className={'section-lg'}>
          <div className="container">

            <div className={clsx('row', styles.responsiveCentered)}>
              <div className="col col--10 col--offset-1">
                <h2>Take the tutorial</h2>
                <h3>
                  <p>
                    Take <Link to={todoTutorialUrl}>our tutorial</Link> and build a full-fledged
                    Todo app in Wasp!
                    You can find it <Link to={todoTutorialUrl}>here</Link>.
                  </p>
                </h3>
              </div>
            </div>

            <div className={clsx('row', styles.responsiveCentered)} style={{ paddingTop: '2rem' }}>
              <div className="col">
                <img alt="How Todo App will work once it is done"
                     src={useBaseUrl('img/todo-app-tutorial-intro.gif')}
                     style={{ border: "1px solid black" }}
                />
              </div>
            </div>

          </div>
        </section>

      <div id="join-the-list">
        <EmailAndGithubCta />
      </div>

      </main>
    </Layout>
  );
}

export default Home;
