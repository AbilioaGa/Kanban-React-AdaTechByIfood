import { members } from '../../../components/MemberTime'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Team = () => {
  return (
    <>
      <section className="w-full bg-background">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground">
              Nosso time
            </h2>
            <p className="font-light text-secondary-foreground sm:text-xl lg:mb-16">
              Conheça os membros do nosso time
            </p>
          </div>
          <div className="mb-6 grid gap-8 md:grid-cols-2 lg:mb-16">
            {members.map((member, index) => (
              <div
                key={index}
                className="items-center rounded-lg border-border bg-card shadow-md sm:flex"
              >
                <div>
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={member.imagem}
                    alt={member.nome}
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {member.nome}
                  </h3>
                  <span className="text-muted-foreground">{member.cargo}</span>
                  <p className="mb-3 mt-4 font-light text-muted-foreground">
                    {member.atividade}
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href={member.github}
                        className="text-muted-foreground hover:text-accent-foreground"
                      >
                        <FaGithub className="h-5 w-5" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={member.linkedin}
                        className="text-muted-foreground hover:text-accent-foreground"
                      >
                        <FaLinkedin className="h-5 w-5" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export { Team }
