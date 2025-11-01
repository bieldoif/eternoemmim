
export type BookPart = {
  id: string;
  type: 'prologue' | 'chapter' | 'epilogue';
  title: string;
  content: string;
  imageId: string;
};

type Book = {
  title: string;
  author: string;
  openingQuote: string;
  synopsis: string;
  closingMessage: string;
  parts: BookPart[];
};

export const book: Book = {
  title: 'ANTES DE PARTIR, VOCÊ FICOU EM MIM',
  author: 'Joaquim dos santos',
  openingQuote:
    'Mesmo na ausência, o amor continua vivo — silencioso, eterno, e presente em cada batida do meu coração.',
  synopsis:
    'Entre lembranças, saudade e amor eterno, este diário revela a história de um homem que perdeu a mulher de sua vida, mas nunca deixou de amá-la. Em 15 capítulos profundos e poéticos, ele compartilha memórias, sentimentos e reflexões sobre o amor verdadeiro, a dor da perda e a força que nasce da lembrança de quem se foi. Um relato intenso e emocionante sobre como o amor continua vivo, mesmo na ausência, ensinando-nos a viver, a sentir e a amar com coragem e gratidão.',
  closingMessage:
    'Este livro é uma homenagem ao amor que não se vai, às lembranças que nos guiam e à coragem de seguir vivendo mesmo diante da perda.',
  parts: [
    {
      id: 'prologue',
      type: 'prologue',
      title: 'Prólogo: Eterno em Mim',
      imageId: 'prologue-img',
      content: `Há amores que marcam a vida de forma silenciosa, mas profunda. Amores que não se medem pelo tempo ou pela presença física, mas pela intensidade com que se sentem, pelo espaço que ocupam em nosso coração, mesmo quando ausentes.
Este é o meu relato. Uma história de amor que começou com olhares tímidos, se fortaleceu em gestos cotidianos, floresceu em sorrisos e abraços, e que agora persiste em lembranças, memórias e saudade. Uma história que aprendi a carregar comigo, mesmo depois da dor da perda, porque o que vivemos não pode desaparecer.
Ao virar cada página deste diário, você encontrará risos e lágrimas, lembranças que aquecem e momentos que rasgam a alma. Encontrará também a certeza de que o amor verdadeiro não morre. Ele permanece, silencioso, persistente, eterno.
Este livro é uma viagem pelo que fomos, pelo que ainda somos em memória, e pelo amor que me ensina todos os dias a seguir adiante, mesmo com o coração partido. É uma homenagem a você, meu amor, e à força que o amor deixa em quem sobrevive.
Prepare-se para entrar em um mundo onde a saudade é companheira, o amor é eterno, e cada memória é um suspiro que mantém vivos aqueles que amamos, mesmo na ausência.`,
    },
    {
      id: 'characters',
      type: 'chapter',
      title: 'Apresentação dos Personagens',
      imageId: 'characters-img',
      content: `**Joaquim:** O narrador desta história, um homem que encontra nas palavras uma forma de eternizar o amor que sente. Sensível e profundo, ele compartilha suas memórias mais íntimas, revelando a dor da perda, mas também a força que encontra nas lembranças para seguir em frente. Através de seu diário, ele nos convida a sentir a intensidade de um amor que transcende a ausência.

**Helena:** A mulher que inspirou cada página deste livro. Embora não esteja fisicamente presente, sua essência é sentida em cada capítulo. Descrita pelos olhos de Joaquim, ela é a personificação do amor, da leveza e da alegria. Uma mulher de sorriso fácil, olhar atento e alma serena, cuja memória continua a guiar e a iluminar a vida daquele que a amou.`,
    },
    {
      id: 'chapter-1',
      type: 'chapter',
      title: 'Capítulo 1: O dia que te conheci',
      imageId: 'ch1-img',
      content: `Nunca pensei que um simples dia pudesse mudar minha vida para sempre. Mas então você apareceu, sem aviso, sem pretensão, e tudo ficou diferente.
Eu estava distraído, perdido em pensamentos comuns — contas, compromissos, nada que importasse de verdade. Até que te vi. O mundo pareceu desacelerar por alguns segundos. Seu sorriso, leve e genuíno, iluminou o ambiente de um jeito que eu nunca tinha percebido. E naquele instante, algo dentro de mim despertou, como se dissesse: “preste atenção, porque isso é importante.”
Eu não sabia seu nome. Não sabia nada sobre você, e ainda assim, parecia que já conhecia a sua alma. Havia algo em você que parecia familiar, como se eu tivesse esperado toda a minha vida por aquele encontro.
Fiquei observando, tímido, sem coragem de me aproximar. Mas cada gesto seu me chamava silenciosamente: a forma como você ajeitou o cabelo, a forma como seu olhar encontrava pequenos detalhes que ninguém mais notava, o jeito que você ria sem perceber. Eu queria me aproximar, dizer algo, mas não sabia o que. Então apenas respirei fundo, tentando memorizar cada traço, cada expressão, cada nuance que fazia de você… você.
Depois, veio a coragem. Um simples “oi” que parecia pequeno demais para o que eu sentia. Mas você sorriu para mim — aquele sorriso que derreteu minhas barreiras — e respondeu com leveza, como se já esperasse minha presença. Foi nesse instante que percebi: eu não queria apenas conhecer você. Eu queria acompanhar sua vida, cada passo, cada sonho, cada silêncio.
Passamos horas conversando, e mesmo que eu não lembrasse mais de todas as palavras, lembro da sensação. Lembro do calor da sua voz, da calma que você transmitia, da forma como tudo ao seu redor parecia fazer sentido quando você estava por perto. E quando o dia terminou, percebi que meu coração não seria mais meu. Ele havia sido gentilmente, inevitavelmente, roubado por você.
À noite, ao deitar, revivi cada detalhe: o jeito que você gesticulava, seu perfume, a forma como seus olhos brilhavam quando falava de algo que amava. E senti algo que nunca tinha sentido antes: uma mistura de paz, medo e esperança. Paz por ter te encontrado, medo de perder qualquer oportunidade de te conhecer melhor, esperança de que esse encontro fosse apenas o início de algo que duraria para sempre.
Eu não sabia ainda, mas naquele dia a minha vida começou a ser contada em capítulos que teriam seu nome. Cada memória futura teria a marca do nosso primeiro olhar, cada decisão que eu tomaria estaria de alguma forma ligada a você. E mesmo sem saber, naquele instante, prometi a mim mesmo: cuidaria de você. Do seu riso, do seu coração, da sua alma. Porque alguém tão único quanto você não poderia ser apenas um fragmento da minha história — você seria a própria história.`,
    },
    {
      id: 'chapter-2',
      type: 'chapter',
      title: 'Capítulo 2: O toque que mudou tudo',
      imageId: 'ch2-img',
      content: `Lembro como se fosse ontem, embora pareça que foi uma vida inteira atrás. O toque da sua mão foi simples, quase casual, mas carregava algo que palavras não conseguem descrever. Foi como se, por um instante, o universo tivesse decidido se alinhar, e todo o caos do mundo tivesse desaparecido.
Eu nunca acreditei que um gesto tão pequeno pudesse causar tamanha revolução dentro de mim. Mas quando nossos dedos se tocaram, senti uma energia silenciosa, uma promessa invisível de que estávamos destinados a nos encontrar.
O toque durou segundos, mas cada segundo parecia se expandir como se o tempo tivesse se esquecido de nós. Lembro do calor da sua mão, da suavidade da sua pele, da forma como meu coração disparou sem que eu tivesse qualquer controle.
Naquele momento, percebi que não havia volta. Eu estava perdido em você.
Depois daquele instante, cada abraço, cada aperto de mão, cada roçar de dedos tornou-se um ritual sagrado. Eu aprendi a reconhecer a sinceridade do seu toque — porque o seu toque não era apenas físico, ele era promessa, lembrança e acolhimento tudo ao mesmo tempo.
E então percebi: era impossível te tocar e não sentir amor. Era impossível te tocar e não querer estar perto, sempre. O toque não precisava de palavras, porque ele falava por nós. Contava histórias de dias que ainda nem existiam, de sonhos que só nós poderíamos compartilhar, de um futuro que, naquele momento, eu já sabia que seria só nosso.
À noite, sozinho, revivia mentalmente o calor da sua mão. Tinha vontade de escrever mil cartas só para te dizer como cada detalhe do seu toque ecoava na minha alma.
Não era apenas desejo; era pertencimento. E, pela primeira vez na vida, senti que pertencia a alguém. Não no sentido de posse, mas no sentido de que parte de mim finalmente encontrara a sua metade — e que essa metade era você.
Foi ali, naquele toque simples, que eu compreendi que o amor verdadeiro não chega com estrondo ou com promessas grandiosas. Ele chega silencioso, sem pedir permissão, mas deixa marcas indeléveis. E eu, sem entender muito bem como, me entreguei ao amor que você desperta em mim, sabendo que aquele toque seria apenas o primeiro de muitos capítulos da nossa história.`,
    },
    {
      id: 'chapter-3',
      type: 'chapter',
      title: 'Capítulo 3: Os dias simples e perfeitos',
      imageId: 'ch3-img',
      content: `Eu sempre acreditei que a felicidade era feita de momentos grandiosos — festas, viagens, conquistas. Mas você me ensinou que a verdadeira felicidade mora nas coisas simples, nos instantes que quase passam despercebidos, mas que carregam todo o significado do mundo.
Lembro das manhãs preguiçosas em que acordávamos tarde, mas a casa já parecia viva com a sua presença. O aroma do café que você preparava, o jeito que mexia na panela com cuidado e sorriso nos lábios, como se cada gesto fosse parte de um ritual secreto de amor. E eu, sentado à mesa, apenas observando, percebia que a vida nunca tinha sido tão completa.
Eram dias comuns, talvez banais para quem olhasse de fora, mas para nós eram perfeitos. Cada risada compartilhada, cada conversa sem sentido, cada silêncio confortável — tudo parecia música, como se o mundo tivesse uma melodia só para nós. Eu aprendi a ver beleza na rotina, porque você me mostrou que o amor se revela nos detalhes: nas mãos entrelaçadas, nas palavras sussurradas, nas pequenas atenções que, juntas, se transformam em eternidade.
Às vezes, sentávamos na varanda só para olhar o céu, e você me ensinava a nomear as nuvens, a reparar nas cores que eu nunca notava. Eu ria, tentava discutir com você sobre “nuvens redondas” e “formas impossíveis”, mas na verdade, adorava cada segundo dessas nossas bobagens. Era como se, ao seu lado, cada momento fosse uma celebração do simples prazer de existir.
E havia os passeios silenciosos, os domingos de filme, as compras improvisadas no mercado, os livros espalhados pelo sofá, os olhares cúmplices que diziam mais que qualquer conversa. Eu percebia que minha vida before de você era vazia — não porque faltava algo, mas porque não sabia que se podia sentir tanto com tão pouco.
Nesses dias simples, eu descobri que o amor verdadeiro não exige grandiosidade. Ele se constrói nas pequenas ações, nos gestos que passam despercebidos para o mundo, mas que, para quem ama, carregam intensidade infinita.
À noite, quando você dormia ao meu lado, eu observava seu rosto iluminado pela luz da lua que entrava pela janela. Pensava em como éramos sortudos por ter encontrado um ao outro e, mesmo sem palavras, sentia que esses dias simples já eram perfeitos o suficiente para preencher minha alma inteira.
E assim eu aprendi, entre cafés mornos e risadas baixas, que a felicidade não está nos grandes momentos que o mundo nos mostra. Ela está em nós, em nós juntos, em cada detalhe que só nós conseguimos perceber. E nesses dias simples, eu soube que amar você seria a maior aventura da minha vida — silenciosa, cotidiana e perfeita em sua essência.`,
    },
    {
      id: 'chapter-4',
      type: 'chapter',
      title: 'Capítulo 4: Nossas risadas e os planos que fizemos',
      imageId: 'ch4-img',
      content: `Rir com você sempre foi um tipo de terapia para minha alma. Não havia preocupação no mundo que resistisse ao som da sua risada, nem tristeza que não fosse suavizada pelo brilho dos seus olhos quando você sorria. Era uma música silenciosa, mas poderosa, que preenchia cada canto do meu ser.
Nós ríamos de tudo — de piadas sem graça, de situações ridículas, de minhas tentativas desastrosas de cozinhar, de pequenos erros do dia a dia. Cada gargalhada sua era uma lembrança de que a vida podia ser leve, mesmo quando o mundo insistia em ser pesado. E eu aprendi que rir juntos é mais do que um momento de alegria: é uma forma de dizer “estou aqui com você”, mesmo sem palavras.
Entre risadas, fizemos tantos planos. Planos que, na época, pareciam longos e improváveis, mas que carregavam a esperança de um futuro só nosso. Falávamos de viagens que ainda não existiam, de casas que ainda não tínhamos, de filhos que talvez viessem — e tudo isso era tão real quanto o ar que respirávamos.
Eu ainda lembro de uma noite, sentados na varanda, olhando para o céu estrelado, quando você disse: “Vamos morar juntos em uma casa cheia de livros e plantas. Cada canto vai ter nosso cheiro e nossa história.” Eu sorri, imaginando cada detalhe, cada risada, cada discussão sobre qual cor pintaríamos as paredes. Naquele instante, percebi que a verdadeira felicidade estava na construção desses planos, na expectativa de um futuro que já existia em nossos corações antes mesmo de se tornar real.
Ríamos dos nossos sonhos mais bobos, daqueles que o mundo acharia insignificantes, mas que para nós tinham valor infinito. Porque o amor não é feito apenas de grandes conquistas; ele é tecido nos pequenos detalhes, nos sorrisos compartilhados, nas mãos entrelaçadas, nas palavras que só nós entendemos.
Cada plano que fizemos juntos era uma promessa silenciosa de cuidado e de presença. E mesmo quando a vida nos lançava obstáculos, eu sentia que, com você, qualquer dificuldade se tornava mais leve, porque havíamos aprendido a rir juntos, a suportar juntos, a sonhar juntos.
À noite, antes de dormir, eu revisava mentalmente nossos planos, imaginando como cada detalhe se realizaria. E então adormecia com a certeza de que, enquanto houvesse risadas compartilhadas, enquanto houvesse sonhos em comum, nosso amor seria eterno — mesmo que a vida insistisse em nos ensinar que nem todos os planos podem se concretizar.
Porque o que permanece não são as viagens, nem a casa, nem os filhos — mas a memória do riso que nos uniu e a sensação de pertencimento que só eu sentia quando estava ao seu lado. E é nesse riso que eu me agarro, quando tudo o mais parece perdido, lembrando que o amor verdadeiro se constrói em pequenos momentos, mas deixa marcas que duram para sempre.`,
    },
    {
      id: 'chapter-5',
      type: 'chapter',
      title: 'Capítulo 5: Quando percebi que te amava',
      imageId: 'ch5-img',
      content: `O amor, quando chega de verdade, não avisa. Não bate na porta com um cartaz dizendo “estou aqui”. Ele entra silencioso, se instala no peito e muda tudo sem que a gente perceba. Foi assim com você.
No início, eu pensava que era apenas afeição, admiração, aquela atração doce que sentimos por alguém especial. Mas aos poucos, comecei a perceber sinais sutis: a saudade antes mesmo de se despedir, o sorriso involuntário ao lembrar de algum detalhe seu, a vontade de ouvir sua voz em qualquer momento do dia.
Lembro de uma tarde chuvosa em que estávamos sentados na sala, você com aquele livro que sempre carregava para todos os lados, eu tentando terminar alguma tarefa que me distraísse. E então você levantou os olhos, riu de algo que eu disse sem importância, e eu senti — pela primeira vez com clareza — que estava completamente perdido em você. Não apenas atraído, não apenas interessado, mas irrevogavelmente amado.
Foi nesse instante que percebi: amar você não era uma escolha, era uma consequência. Cada gesto seu, cada olhar, cada palavra tinha penetrado tão fundo que não havia como recuar. O amor tinha me encontrado, e eu, por minha vez, já não conseguia imaginar a vida sem você.
Depois desse dia, tudo mudou. Cada pensamento, cada decisão, cada pequeno momento passou a ser medido por um único critério: você. Eu comecei a perceber sua ausência em segundos, sua presença em horas inteiras, e a intensidade do sentimento só crescia. Percebi que o amor verdadeiro é silencioso, persistente, uma chama que não se apaga, mesmo quando o vento tenta apagar.
Eu te amava de maneiras que eu nem sabia que existiam: amava o seu jeito de falar, de caminhar, de rir; amava suas manias, suas inseguranças, até mesmo os seus silêncios. Amava não apenas por quem você era, mas por quem eu me tornava ao seu lado — mais completo, mais sensível, mais humano.
E então veio o medo. Medo de perder você, medo de que o tempo pudesse roubar o que eu mais valorizava. Mas aprendi que o amor verdadeiro não se mede pelo controle ou pela posse; ele se manifesta na intensidade do sentimento, na entrega plena, na coragem de ser vulnerável.
À noite, sozinho, eu revivia mentalmente cada instante em que você havia cruzado meu caminho, e compreendia que cada um desses momentos havia me conduzido a essa certeza: amar você era inevitável, irrevogável, eterno. Eu te amava não por circunstâncias, mas por essência. Eu te amava porque a minha vida, de repente, só fazia sentido com você dentro dela.
E naquele silêncio, naquela certeza que não precisava de palavras, percebi que o amor verdadeiro é assim: silencioso, profundo, incontrolável — e capaz de transformar toda uma existência apenas com a presença de alguém. Eu te amava, e nunca havia sentido nada igual em toda a minha vida.`,
    },
    {
      id: 'chapter-6',
      type: 'chapter',
      title: 'Capítulo 6: O nosso lar — e o silêncio depois',
      imageId: 'ch6-img',
      content: `Nosso lar nunca foi feito de paredes ou móveis caros. Ele sempre foi você e eu, em nossas rotinas, em nossos gestos silenciosos, nas pequenas coisas que, para o mundo, poderiam parecer insignificantes, mas que para nós eram tudo.
Lembro das manhãs em que o cheiro do café fresco invadia a cozinha e você sorria com aquele jeito leve, sem pressa, como se o tempo tivesse aprendido a nos respeitar. Cada canto da casa guardava memórias nossas: o sofá onde ríamos de filmes ruins, a estante abarrotada de livros que eu nunca lia, mas você adorava, a cama onde nossos corpos se encontravam cansados, felizes e tranquilos. Cada objeto, cada detalhe, parecia murmurar o nosso amor.
Hoje, no entanto, o silêncio domina os mesmos cômodos. Um silêncio pesado, que não é apenas a ausência da sua voz, mas a ausência de você. O sofá parece maior, a estante mais vazia, a cama mais fria. Caminho pela casa e encontro restos de nós espalhados — uma xícara esquecida, um livro aberto, uma blusa sua no chão — e sinto sua presença em cada um desses detalhes, como se você estivesse sussurrando que ainda está aqui, de algum jeito que meu coração consegue sentir, mas meus olhos não podem ver.
Há noites em que sento sozinho na varanda, olhando para o céu, tentando ouvir sua risada no vento, tentando sentir seu toque no frio da noite. E, mesmo que a saudade doa, percebo que nosso lar não desapareceu. Ele mudou. Ele se transformou em lembrança viva, em memória que respira, em sentimento que insiste em existir.
Eu me pego falando com você, mesmo sabendo que não há resposta além do meu próprio eco. Conto meu dia, divido minhas angústias, minhas conquistas, minhas dores. E é nesses momentos que compreendo que o lar que construímos juntos não está nas coisas, mas no amor que deixamos impregnado em cada gesto, em cada canto, em cada instante.
Ainda assim, é doloroso. Porque cada objeto, cada lembrança, me lembra que você se foi, que o nosso silêncio agora não é compartilhado, que a casa guarda ecos do que fomos. Mas é nesse mesmo silêncio que aprendo algo essencial: amar alguém não significa apenas estar junto, mas carregar essa pessoa, mesmo ausente, e permitir que ela continue habitando cada parte de nós.
Nosso lar mudou, sim. Mas ele não morreu. Ele vive em minhas lembranças, em meus gestos, no jeito como caminho pelos cômodos procurando você, mesmo sabendo que não vai mais aparecer. Ele vive no amor que nos fez, no amor que ainda sinto.
E, apesar da dor, mesmo com a solidão, sinto que cada memória, cada detalhe, cada silêncio, é uma prova de que o que construímos juntos era verdadeiro — e que a casa, mesmo sem você, continuará sendo nosso santuário enquanto eu tiver força para lembrar.`,
    },
    {
      id: 'chapter-7',
      type: 'chapter',
      title: 'Capítulo 7: As coisas que ficaram espalhadas pela casa',
      imageId: 'ch7-img',
      content: `A casa está cheia de você, mesmo que você não esteja mais aqui. Cada objeto parece carregar um fragmento da sua presença, como se tivesse memórias próprias que se recusam a desaparecer. Eu caminho pelos cômodos e, em cada canto, encontro lembranças silenciosas que me fazem sorrir e chorar ao mesmo tempo.
Há um livro aberto na estante, aquele que você estava lendo na última tarde em que nos vimos. A página ainda marcada com seu dedo, o título quase sussurrando seu nome. Ao lado, sua xícara favorita, esquecida sobre a mesa, ainda com o aroma que parecia te acompanhar pela casa inteira. Cada detalhe é um retrato de nós, um registro silencioso do amor que construímos sem perceber que estava sendo registrado para sempre.
Vejo suas roupas ainda penduradas, algumas dobradas com cuidado, outras deixadas de lado como se estivessem esperando você voltar. Cada peça conta histórias: a jaqueta que usou na nossa primeira viagem, o vestido que usou na noite em que rimos até doer a barriga, o cachecol que sempre se enroscava no seu pescoço nos dias frios. Tudo está aqui, esperando você, e eu também espero, mesmo sabendo que não virá.
Às vezes, passo horas apenas olhando esses pequenos fragmentos de você. E é impossível não sentir sua presença em tudo. O cheiro do perfume no corredor, o toque do seu lençol, o som da cadeira que se movia quando você se levantava. Cada coisa parece me dizer: “eu estive aqui, eu existi, eu amei”.
E é nesse simples ato de observar que percebo algo: não são apenas objetos. São lembranças vivas, pontes que me conectam a você, que me permitem sentir seu abraço mesmo quando estou sozinho. Cada canto da casa é um diário silencioso do nosso amor, e eu me agarro a ele com unhas e dentes, porque sem essas memórias, seria impossível suportar a saudade que insiste em me atravessar o peito.
Mesmo assim, há dor. Dor por saber que não posso mais tocá-los como tocava você, dor por perceber que a vida continua ao redor enquanto o meu mundo parou. Mas essa dor também é prova de que amei de verdade, de que cada gesto, cada toque, cada sorriso que compartilhamos deixou marcas indeléveis.
E então aprendo a conviver com elas. Aprendo que o amor não desaparece junto com a pessoa, que ele permanece nas coisas, nas memórias, nos detalhes que ninguém mais percebe, mas que eu sinto com cada batida do coração. As coisas espalhadas pela casa não são apenas lembranças; são sinais de que você vive em mim, e que, de algum jeito, continuamos juntos, mesmo que o mundo diga que não`,
    },
    {
      id: 'chapter-8',
      type: 'chapter',
      title: 'Capítulo 8: O dia em que te vi partir',
      imageId: 'ch8-img',
      content: `Nenhuma palavra pode capturar o silêncio que tomou conta daquele dia. Nenhuma imagem consegue descrever a sensação de olhar para você pela última vez. E, no entanto, aqui estou, tentando colocar em palavras algo que parece impossível de traduzir: a dor de ver o amor da minha vida se afastar para sempre.
Acordei naquela manhã sem saber que seria diferente. O sol entrou pela janela com sua luz habitual, mas parecia fraco, como se o mundo soubesse que algo havia mudado. Você estava ao meu lado, dormindo, tranquila e serena, como sempre. E eu olhava para você, tentando memorizar cada detalhe: o contorno do seu rosto, o jeito que seu cabelo caía sobre o travesseiro, o som da sua respiração calma.
Quando a hora chegou, senti um aperto no peito que jamais havia experimentado. Segurei sua mão com força, como se pudesse impedir que o tempo avançasse, como se o toque pudesse adiar o inevitável. E você sorriu para mim, com aquela serenidade que sempre me encantou, dizendo palavras suaves, tentando me consolar, como se quisesse me proteger da dor que só eu podia sentir.
O caminho até o hospital foi silencioso. Cada curva, cada luz, cada detalhe parecia amplificar o medo que crescia dentro de mim. E então, finally, chegamos. Eu me apeguei a você, não queria soltá-la, e mesmo assim tive que deixar suas mãos escorregarem das minhas, entregando você a um destino que eu não podia controlar.
Eu a vi entrar, sem olhar para trás, e senti o mundo desabar em um instante. Cada passo seu parecia lento demais, e ao mesmo tempo, rápido demais para que eu pudesse me despedir de verdade. Meu coração gritava, mas não havia som que pudesse alcançar você. Meu corpo implorava, mas meus braços estavam vazios.
Tudo que restava era esperança — aquela pequena chama que insiste em permanecer mesmo nos piores momentos —, e ela não bastava.
Depois, o silêncio. Um silêncio que não era apenas ausência de som, mas ausência de vida compartilhada. Eu fiquei ali, parado, olhando para o nada, sentindo cada segundo como se fossem anos, cada instante como se fosse eterno. E percebi que o amor verdadeiro não é apenas um sentimento bonito; ele é também dor, saudade, impotência, e a coragem de continuar mesmo quando a perda é esmagadora.
Passei aquele dia inteiro tentando encontrar sentido, tentando aceitar que você se foi. Mas nada parecia certo. A vida continuava lá fora, as pessoas falavam, riam, respiravam — e eu apenas existia no vazio deixado por você. Tudo que eu podia fazer era lembrar do seu sorriso, das nossas risadas, dos planos que fizemos, e tentar guardar cada fragmento de você em minha memória, porque, sem isso, eu não saberia como seguir.
E assim, mesmo com a dor que ainda me atravessa, percebo que amar alguém de verdade é se permitir sentir essa perda, sem nunca deixar de guardar o que foi precioso. Eu te vi partir, e naquele instante compreendi a força do amor: ele continua mesmo quando tudo ao redor se desfaz, ele persiste, silencioso, dentro de mim, em cada lembrança, em cada suspiro, em cada batida do coração que ainda te chama.`,
    },
    {
      id: 'chapter-9',
      type: 'chapter',
      title: 'Capítulo 9: O tempo que parou comigo',
      imageId: 'ch9-img',
      content: `Depois que você se foi, percebi que o tempo perdeu o sentido. As horas continuaram a passar, os dias continuaram a nascer e a morrer, mas para mim, tudo parecia congelado naquele instante em que a vida se dividiu em “antes de você” e “depois de você”.
Eu caminhava pela casa, pelos mesmos cômodos que um dia foram cheios de risadas, e tudo parecia distante, irreconhecível. O tic-tac do relógio ecoava como um lembrete cruel: a vida segue, mesmo quando nosso coração insiste em parar. E, no entanto, eu permanecia ali, preso em memórias, revivendo cada detalhe do nosso amor, cada gesto, cada toque, como se pudesse, ao me lembrar, trazer você de volta.
Havia momentos em que eu tentava seguir, mas o mundo lá fora parecia absurdo. As pessoas sorriam, continuavam suas rotinas, falavam sobre planos futuros, e eu apenas sentia que nada fazia sentido sem você. O tempo havia parado para mim no instante em que te perdi, e tudo que eu queria era congelar aquela memória, mantê-la intacta, porque nela você ainda estava viva, inteira, sorrindo para mim.
Mas, ao mesmo tempo, existia uma pequena chama de resistência. Eu percebia que precisava continuar, mesmo que fosse apenas por nós dois. Era doloroso, impossível, mas havia algo dentro de mim que ainda se agarrava à vida, tentando encontrar sentido nas lembranças, tentando transformar a dor em memória, tentando transformar a ausência em amor que persiste.
Eu me sentava sozinho, olhando pela janela, e tentava ouvir sua voz no vento, sentir seu cheiro no ar, imaginar que você ainda estava ali, de algum modo. E percebi que, embora o tempo tivesse parado dentro de mim, ele continuava lá fora, teimoso, impiedoso. E eu precisava aprender a conviver com ele, a viver apesar dele, a existir com você ausente, mas ainda presente em cada batida do meu coração.
Cada dia se tornou uma luta silenciosa entre a dor da ausência e a lembrança do amor. Cada instante era preenchido com memórias nossas, com fragmentos de risadas, toques e promessas. O tempo, que parecia ter me abandonado, começou lentamente a me ensinar que, embora não pudesse trazer você de volta, ele podia me ensinar a carregar você comigo, a transformar cada segundo de saudade em força, em lembrança viva, em amor que persiste.
E foi assim, passo a passo, lembrança a lembrança, que comecei a perceber algo: o amor não depende do tempo. Ele existe além dos relógios, além dos dias e das horas. Ele sobrevive, silencioso e eterno, dentro de nós, mesmo quando tudo ao redor continua, indiferente, sem esperar. E eu aprendi que, mesmo com o tempo parado dentro de mim, você ainda vive — no meu coração, na minha memória, em cada pedaço da minha alma que continua a te amar.`,
    },
    {
      id: 'chapter-10',
      type: 'chapter',
      title: 'Capítulo 10: As cartas que nunca te entreguei',
      imageId: 'ch10-img',
      content: `Eu escrevia para você todos os dias, mesmo sabendo que nunca poderia entregar aquelas cartas. Não porque não quisesse, mas porque algumas words são tão profundas que só existem com sentido quando guardadas no silêncio do coração.
Cada carta começava com um simples “eu te amo”, mas se transformava em páginas e páginas de memórias, sentimentos e desabafos que ninguém mais entenderia.
Contava sobre minhas pequenas vitórias, sobre os momentos em que pensei em você, sobre o quanto sentia sua falta mesmo quando estava ao meu lado. Escrevia sobre nossos planos, sobre nossos risos, sobre cada toque seu que ainda parecia vivo em minhas mãos.
Algumas cartas eram de amor puro, outras de saudade dilacerante. Havia lágrimas manchando algumas páginas, e eu as escrevia com a esperança secreta de que, de algum modo, você pudesse sentir meu coração através delas. Eu confessava medos, sonhos e segredos que nunca ousaria dizer em voz alta, mas que, no papel, se tornavam uma ponte silenciosa entre nós.
E quando você se foi, as cartas se multiplicaram. Cada noite eu sentava sozinho, escrevendo como se pudesse, assim, preencher o vazio que sua ausência deixou. Cada palavra escrita era uma tentativa de te tocar novamente, de te trazer de volta, mesmo que por instantes, mesmo que apenas em memória.
Nunca enviei essas cartas, porque sabia que não existia correio capaz de atravessar o espaço entre o presente e a eternidade. Mas escrevê-las me permitia sobreviver. Me permitia sentir que nosso amor não tinha fim, que, embora você estivesse ausente, ainda podia viver em mim. Cada página era um fragmento seu que eu conseguia guardar, um pedaço da nossa história que não podia desaparecer.
Eu releio algumas vezes, e me pego sorrindo e chorando ao mesmo tempo. Sorrindo porque cada palavra ainda mantém você viva em mim; chorando porque nenhuma carta poderia realmente trazer você de volta. Mas então percebo algo essencial: o amor não depende da presença física. Ele existe nas palavras que guardamos, nos sentimentos que não se apagam, nas memórias que resistem ao tempo.
E assim, mesmo sem entregar essas cartas, sei que elas cumprem sua missão. Elas mantêm você viva, não apenas em lembranças, mas em mim. Elas transformam a saudade em força, a ausência em memória e o amor em eternidade. Porque, mesmo em silêncio, mesmo na distância, o que escrevi para você permanece. E isso me faz sentir que, de algum jeito, nunca deixei de te tocar, nunca deixei de te amar, e nunca deixarei.`,
    },
    {
      id: 'chapter-11',
      type: 'chapter',
      title: 'Capítulo 11: As lembranças que me salvam',
      imageId: 'ch11-img',
      content: `Quando a solidão se torna insuportável, eu me refugio nas lembranças. Elas são como pequenas chamas que iluminam a escuridão da ausência, lembrando-me que o que vivemos foi real, intenso e eterno.
Lembro do seu sorriso logo ao acordar, meio tímido, meio sonolento, que conseguia iluminar qualquer manhã cinzenta. Lembro do toque das suas mãos nas minhas, do jeito que segurava meu rosto ao falar palavras de carinho, do som da sua risada que parecia dançar pela casa inteira. Cada detalhe se tornou tesouro, porque são únicos, impossíveis de serem substituídos.
E mesmo nos dias mais difíceis, quando a saudade pesa demais e a dor ameaça me consumir, é nessas lembranças que encontro forças para continuar. Cada memória se transforma em consolo, cada recordação é um abraço silencioso que me protege.
Eu fecho os olhos e quase consigo sentir você ao meu lado novamente, como se nada tivesse mudado, como se o tempo pudesse retroceder por alguns segundos preciosos.
Eu revivo nossas conversas, nossos planos, nossos risos. Imagino novamente nossas caminhadas pela cidade, nossas brincadeiras bobas, nossos momentos de silêncio confortável, quando não precisávamos de palavras para nos entender. Tudo isso ainda vive em mim, e cada lembrança me salva de me perder completamente na dor da ausência.
Às vezes, me pego sorrindo sozinho, lembrando de algo que você disse ou de uma situação que vivemos juntos. E mesmo que o sorriso seja acompanhado de lágrimas, ele me lembra que fomos felizes, que amamos de verdade e que essa história nunca será apagada. As lembranças não são apenas ecos do passado; elas são pontes que me conectam a você, que me lembram que o amor que sentimos foi real e profundo.
Eu aprendi que a memória é um refúgio seguro, um lugar onde você ainda existe, onde posso tocar você, ouvir sua voz e sentir seu abraço. E mesmo que o mundo lá fora continue, que as pessoas sigam com suas vidas, que o tempo insista em avançar, essas lembranças permanecem. Elas são minha fortaleza, meu conforto, minha razão para continuar.
Porque amar você não acabou quando você se foi. Amar você continua em cada detalhe que guardo, em cada memória que revive dentro de mim, em cada gesto do meu coração que ainda bate por nós. E é por isso que, mesmo sozinho, mesmo na dor, eu ainda sorrio — porque sei que as lembranças nos mantêm juntos, eternamente, e me salvam todos os dias.`,
    },
    {
      id: 'chapter-12',
      type: 'chapter',
      title: 'Capítulo 12: As promessas que fiz e não pude cumprir',
      imageId: 'ch12-img',
      content: `O amor é feito de promessas. Promessas que fazemos com o coração, sem pensar no tempo, sem medir a vida ou os caminhos que ela pode nos levar. Com você, fiz tantas promessas… promessas que hoje me assombram, porque não pude cumpri-las.
Lembro-me de cada palavra, cada plano que sussurrei ao seu ouvido. Prometi viagens, risos infinitos, manhãs de café juntos, noites de silêncio compartilhado, uma vida inteira para explorarmos lado a lado. E prometi cuidar de você, proteger você, estar presente em cada detalhe da sua existência.
E mesmo sabendo que cumpri tantas outras, é impossível não sentir o peso das que ficaram inacabadas. Há uma dor silenciosa em carregar promessas não cumpridas, porque elas são lembranças do que o destino não permitiu, e a ausência de você é o eco cruel que me lembra que não houve tempo suficiente.
Às vezes, revisito mentalmente cada promessa feita, e sinto como se estivesse caminhando por um campo de memórias que me esmagam e me confortam ao mesmo tempo. Sinto sua voz em minha mente, dizendo palavras de amor, e eu me pergunto se, em algum momento, você percebeu a profundidade de cada intenção, se sentiu o peso do que estávamos construindo juntos.
Mas então percebo algo essencial: o amor verdadeiro não se mede apenas pelo cumprimento de promessas, mas pela intensidade com que elas são feitas, pela sinceridade que existe em cada gesto, em cada palavra, em cada intenção. Eu te amei com toda a força que meu coração podia oferecer, e mesmo que algumas promessas tenham ficado pelo caminho, cada momento ao seu lado foi uma promessa cumprida de amor.
E, mesmo sozinho agora, carrego essas promessas como relíquias sagradas. Elas me lembram de que amei de verdade, de que me entreguei por completo, de que cada intenção era guiada pelo coração. Cada promessa não cumprida é, na verdade, uma prova de quanto você significava para mim, de quanto a vida era mais bela ao seu lado, de quanto o amor que vivemos foi real.
Então sigo adiante, com dor, com saudade, mas também com gratidão. Gratidão por cada promessa feita, por cada gesto de amor, por cada instante que nos permitiu construir algo único. Porque, mesmo que não tenha cumprido todas as promessas, cumpri a maior de todas: te amar com intensidade, verdade e eternidade.
E isso, meu amor, ninguém pode tirar de mim.`,
    },
    {
      id: 'chapter-13',
      type: 'chapter',
      title: 'Capítulo 13: O vazio que ensina a amar ainda mais',
      imageId: 'ch13-img',
      content: `O vazio é um mestre cruel. Ele chega sem avisar, silencioso, e ensina lições que nenhum livro ou conselho poderia preparar. Quando você se foi, percebi que o vazio não é apenas a ausência de alguém; é o espaço que sobra quando a vida perde uma de suas cores mais vivas, quando o silêncio se torna ensurdecedor e o coração parece não encontrar batida própria.
Mas, ao mesmo tempo, o vazio me ensinou algo que eu jamais imaginei: ele ensina a amar com profundidade. Amar não é apenas estar junto, não é apenas sorrir ou segurar mãos; amar é sentir falta, é lembrar, é carregar a pessoa dentro de nós mesmo quando não podemos tocá-la. O vazio me mostrou que amar você não acabou quando você se foi — ele continua, mais intenso, mais silencioso, mais eterno.
Caminho pela casa, e cada espaço vazio é um lembrete do seu amor. Cada canto que antes ecoava risadas agora me ensina a reconhecer a força do que sentimos. É doloroso, impossível, mas ao mesmo tempo, é uma oportunidade de amar de outra forma: com lembranças, com memórias, com a presença invisível que insiste em existir mesmo na ausência.
Às vezes, me deito sozinho e fecho os olhos, tentando ouvir sua voz no vento, tentando sentir seu toque no vazio do meu quarto. E é nesses momentos que compreendo: o vazio é um espaço sagrado onde nosso amor continua vivo, onde cada lembrança se torna um abraço, cada memória se transforma em consolo, cada saudade em força.
Aprendi que o amor não precisa de presença física para existir. Ele sobrevive, silencioso e firme, dentro de nós. E, mesmo com a dor que me atravessa, percebo que esse vazio é também uma prova do quanto te amei — e do quanto ainda te amo. Ele me ensina a valorizar cada detalhe, a revisitar cada gesto, a sentir cada lembrança com a intensidade que você merece.
E então, entre lágrimas e suspiros, eu sorrio. Sorrio porque, apesar de tudo, o amor continua. Ele não acabou com você, não desapareceu com a sua partida. Ele vive em mim, em cada batida do coração, em cada pensamento, em cada gesto silencioso que ainda me conecta a você. O vazio não é apenas dor; ele é prova de que amamos de verdade, de que sentimos profundamente, de que, mesmo na ausência, continuamos a amar — e a viver — com você sempre presente.
“O amor verdadeiro não se vai com a ausência; ele permanece em cada memória, em cada suspiro, em cada lembrança que carrego em mim.”`,
    },
    {
      id: 'chapter-14',
      type: 'chapter',
      title: 'Capítulo 14: As memórias que me guiam',
      imageId: 'ch14-img',
      content: `Quando penso em você, percebo que nossas memórias são como faróis na escuridão da minha vida. Elas me guiam, me protegem, me lembram do que é real e do que vale a pena carregar. Cada lembrança nossa é uma bússola silenciosa que me mantém no caminho, mesmo quando a saudade ameaça me perder.
Lembro do nosso primeiro passeio de mãos dadas, da primeira noite em que dormimos lado a lado, do primeiro café da manhã preguiçoso em que rimos das nossas próprias manias. Lembro de cada detalhe que parecia pequeno na hora, mas que hoje se transformou em eternidade. Cada memória é uma prova do amor que vivemos, do que fomos e do que continuamos sendo, mesmo na distância e no silêncio.
Quando a dor se torna intensa, fecho os olhos e revisito nossos momentos. Sinto seu toque, ouço sua risada, vejo seu sorriso iluminando meus dias. E é nesse instante que entendo: as memórias não são apenas lembranças do passado, mas força para o presente. Elas me ensinam a continuar, a amar de forma silenciosa, a carregar você comigo sem me perder no caminho.
Há dias em que me sinto perdido, incapaz de avançar, mas sempre que lembro de nós, sinto um impulso para seguir. Lembrar de você me ensina a ser melhor, a valorizar os pequenos detalhes, a amar com intensidade, mesmo que de forma invisível. Cada gesto seu, cada palavra, cada instante compartilhado, se tornou parte de mim, e é isso que me mantém de pé.
As memórias não me deixam esquecer, mas também não me deixam desistir. Elas transformam a saudade em companhia, a ausência em presença e o amor em eternidade. E, mesmo que o mundo continue indiferente, mesmo que a vida siga sem você, essas lembranças me guiam e me lembram do que é mais importante: que amei de verdade, que fomos felizes e que nada, absolutamente nada, poderá apagar o que vivemos.
E assim, eu sigo, guiado por cada instante que compartilhamos. Cada memória é um passo, cada lembrança é um abraço, cada detalhe seu é uma luz que ilumina minha caminhada. Porque, mesmo na sua ausência, você continua sendo minha guia, meu norte, meu porto seguro, e meu amor por você continua vivo, silencioso, eterno, e presente em cada batida do meu coração.`,
    },
    {
      id: 'chapter-15',
      type: 'chapter',
      title: 'Capítulo 15: A despedida e a motivação de seguir',
      imageId: 'ch15-img',
      content: `Hoje escrevo a última página do nosso diário, mas não porque o amor acabou. Pelo contrário: escrevo para lembrar que, mesmo com a sua ausência, ele continua vivo, pulsando dentro de mim, guiando meus passos e fortalecendo minha alma.
Adeus, meu amor, não é um fim. É apenas uma forma de honrar tudo que vivemos, tudo que fomos e tudo que continuaremos sendo em memória e sentimento. Cada risada, cada toque, cada instante compartilhado permanece em mim como um tesouro que o tempo jamais poderá apagar.
Ainda sinto a sua falta todos os dias, e talvez sinta para sempre. Mas aprendi que a saudade não precisa me paralisar; ela pode ser combustível. Cada lembrança, cada memória, cada carta não entregue é um lembrete de que amei de verdade — e que posso continuar amando, mesmo na ausência.
Hoje, fecho este diário com gratidão. Gratidão por ter tido você em minha vida, por ter conhecido a profundidade de um amor que transforma, que ensina, que salva. Gratidão por ter vivido cada momento com intensidade, por ter aprendido que o amor verdadeiro não se mede pelo tempo, mas pela intensidade com que sentimos e cuidamos.
E, finally, aprendo que é possível seguir. Seguir carregando você em cada gesto, em cada pensamento, em cada batida do meu coração. Seguir vivendo com coragem, mesmo quando a dor insiste em me puxar para baixo. Seguir acreditando que, mesmo em meio à ausência, o amor continua a iluminar o caminho.
Então, meu amor, esta não é uma despedida triste, mas uma celebração. Celebração do que fomos, do que somos em memória, do que continuaremos sendo em cada instante que eu me lembrar de você. Que a vida continue me ensinando a honrar você, a amar intensamente, a sorrir com lembranças, a caminhar com força e a viver com propósito.
Porque, no fim, o amor verdadeiro não se vai. Ele permanece. Ele transforma. Ele motiva. E é com ele que sigo adiante, com você sempre dentro de mim, me lembrando todos os dias que a vida continua, e que eu posso ser forte, feliz e pleno, mesmo depois da dor da perda.
Adeus, meu amor. Mas nunca um adeus final. Você está em cada lembrança, em cada suspiro, em cada passo que eu dou. E é assim que aprendi a viver de novo: amando você eternamente, mesmo que em silêncio, mesmo que na saudade, mesmo que na ausência.`,
    },
    {
      id: 'epilogue',
      type: 'epilogue',
      title: 'Epílogo',
      imageId: 'epilogue-img',
      content: `Passaram-se dias, meses… e a saudade ainda insiste em me acompanhar. Mas aprendi que ela não precisa me derrubar, e sim me lembrar da intensidade do que vivemos.
Helena não se foi completamente. Ela está em cada gesto meu, em cada lembrança que me faz sorrir, em cada amanhecer que me inspira a continuar. O amor que compartilhamos não morreu; ele se transformou em força, em guia, em luz silenciosa que ilumina minha caminhada.
Agora caminho com coragem, carregando você dentro de mim. A dor da perda ainda existe, mas ela se mistura com gratidão, amor e memórias que me transformaram. Cada passo que dou é um passo guiado por você, por nós, e pela certeza de que amar verdadeiramente é eterno, mesmo quando o coração sente falta.
Este é o fim do diário, mas não do amor. Ele persiste, silencioso, imortal, presente em cada batida do meu coração, lembrando-me todos os dias de que vivi algo único, verdadeiro e inesquecível.

“O amor verdadeiro não se vai com a ausência; ele permanece em cada memória, em cada suspiro, em cada lembrança que carrego em mim.”`,
    },
    {
      id: 'agradecimentos',
      type: 'chapter',
      title: 'Agradecimentos',
      imageId: '',
      content: 'A todos que chegaram até aqui, meu mais sincero obrigado. Cada página deste livro carrega sentimentos, memórias e pedaços de mim — e saber que minhas palavras encontraram abrigo em seus olhos é o maior presente que eu poderia receber. Que esta história tenha tocado seu coração de alguma forma, assim como me transformou ao escrevê-la.  Um agradecimento especial à Raica, minha amiga e artista incrível, que deu rosto e alma a este livro através de sua sensibilidade na capa. Sua arte não apenas ilustrou a história — ela a sentiu, a traduziu e a fez viver em cores.  De coração, Obrigado por fazer parte dessa jornada.',
    },
  ],
};

    

    