import fundador from "../img/fundador.jpg";

export default function FounderSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Master Vilhena</h2>
            <h3 className="text-xl text-red-600 font-semibold mb-4">Founder & Head Master</h3>
          <h3 className="mb-4">25 anos ensinando jiu-jitsu e ajudando a formar cidadãos de bem</h3>
            <p className="text-gray-600 mb-4">
            A Família em especial sua mãe sempre incentivou o professor <b>Jefferson Vilhena</b> a pratica de artes
            marciais desde sua infância tendo treinado diversas artes como Karatê, Judô, Boxe e Capoeira até
            se encontrar no de Jiu-Jitsu no ano de 1995 aos 17 anos em pouco tempo já estava participando de
            eventos de Vale Tudo e algumas competições de Jiu-Jitsu. Em 1999 com apenas 21 anos a convite da
            Família Viera em especial do professor Arlindo Viera que havia sido seu mestre de Karatê convidou
            para lecionar aulas de Jiu-Jitsu na cidade de Marabá no Sul do Pará onde não havia nenhuma academia
            da Arte Suave, no inicio com apenas quatro alunos, mas com o passar dos anos cada vez mais pessoas
            foram se matriculando e expandindo para outros municípios vizinhos em especial cidade de Parauapebas
            com a chegada do professor Islander Sousa que foi um dos grandes líderes da equipe.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-red-600 rounded-lg transform rotate-2"></div>
            <img
              src={fundador}
              alt="Mestre Jefferson Vilhena"
              className="relative rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}