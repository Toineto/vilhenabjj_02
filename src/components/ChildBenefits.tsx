import kids from "../img/kids.jpg";

export default function FounderSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-red-600 rounded-lg transform rotate-2"></div>
            <img
              src={kids}
              alt="Mestre Jefferson Vilhena"
              className="relative rounded-lg shadow-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Benefícios para as crianças no jiu-jitsu</h2>
            <p className="text-gray-600 mb-4">
              Desenvolvimento Físico: O jiu-jitsu ajuda no desenvolvimento da força, resistência, flexibilidade e coordenação motora das crianças.
              Os treinos envolvem movimentos variados que contribuem para um corpo mais saudável. Disciplina e Respeito: O jiu-jitsu enfatiza a disciplina e o respeito,
              o que é fundamental para o desenvolvimento de boas maneiras e comportamento adequado nas crianças. Autocontrole: As crianças aprendem a controlar suas emoções e
              ações durante as aulas de jiu-jitsu, o que pode ser valioso na vida cotidiana. Confiança: À medida que as crianças adquirem habilidades e progridem em suas faixas,
              sua confiança cresce. Isso pode se traduzir em maior autoestima e autoconfiança.
              Habilidades de Resolução de Conflitos: O jiu-jitsu ensina as crianças a resolverem conflitos de forma pacífica e a lidarem com situações de estresse.

            </p> 
            <br />
            <p className="text-gray-600 mb-4">
              Trabalho em Equipe: As aulas muitas vezes envolvem atividades em grupo e a prática com parceiros, o que ajuda as crianças a desenvolverem habilidades de trabalho em equipe.
              Foco e Concentração: O jiu-jitsu exige foco e concentração, o que pode ajudar as crianças a melhorar suas habilidades acadêmicas e cognitivas. Defesa Pessoal: As crianças aprendem
              técnicas de defesa pessoal que podem ser úteis para sua segurança. Socialização: As aulas de jiu-jitsu proporcionam oportunidades para as crianças fazerem novos amigos e se socializarem
              fora do ambiente escolar. Hábitos de Vida Saudáveis: O jiu-jitsu promove hábitos saudáveis, como exercício regular e boa alimentação. Resistência ao Bullying: O treinamento de jiu-jitsu pode
              ajudar as crianças a desenvolverem autoconfiança e habilidades para lidar com situações de bullying, bem como a evitar confrontos desnecessários. Diversão e Recreação: O jiu-jitsu é uma atividade
              divertida e desafiadora que pode manter as crianças entusiasmadas e ativas. É importante que as crianças pratiquem jiu-jitsu sob a orientação de instrutores qualificados e em um ambiente seguro.
              Além disso, os pais devem estar envolvidos e apoiar seus filhos em suas atividades esportivas. O jiu-jitsu pode ser uma maneira valiosa de promover o desenvolvimento físico, mental e social das crianças.</p>
          </div>
        </div>
      </div>
    </div>
  );
}