     // ===== COURSE DATA =====
        const courseData = {
            presencial: [
                {
                    name: "Engenharia Civil",
                    price: "R$ 1.890/mês",
                    duration: "5 anos",
                    desc: "Formação completa em projetos estruturais, construção e gestão de obras.",
                    fullDesc: "O curso de Engenharia Civil da Universidade Aurora oferece uma formação abrangente e multidisciplinar, abrangendo desde os fundamentos de mecânica dos solos e resistência dos materiais até a gestão de grandes obras de infraestrutura. Os alunos terão acesso a laboratórios equipados com tecnologia de ponta e realizarão estágios supervisionados em empresas parceiras do setor da construção civil.",
                    market: "A engenharia civil continua sendo uma das áreas com maior demanda no mercado de trabalho brasileiro. Com o crescimento do setor de infraestrutura e a retomada de grandes obras públicas e privadas, profissionais qualificados são cada vez mais valorizados. Engenheiros civis atuam em construtoras, escritórios de projetos, órgãos governamentais e como empreendedores.",
                    skills: ["Projeto estrutural", "Gestão de obras", "Topografia", "Mecânica dos solos", "Orçamento de obras", "AutoCAD e BIM", "Fiscalização de obras"],
                    tools: ["AutoCAD", "Revit", "CYPECAD", "Eberick", "MS Project", "TQS", "SketchUp"]
                },
                {
                    name: "Medicina",
                    price: "R$ 5.200/mês",
                    duration: "6 anos",
                    desc: "Formação médica de excelência com hospital universitário próprio.",
                    fullDesc: "O curso de Medicina da Universidade Aurora é reconhecido pela excelência em ensino e pesquisa. Com um hospital universitário próprio e centros de simulação clínica de última geração, os alunos vivenciam a prática médica desde os primeiros anos. A grade curricular abrange todas as especialidades médicas, com ênfase em atenção primária à saúde e práticas integrativas.",
                    market: "O mercado para médicos no Brasil é amplo e diversificado. Com a carência de profissionais em diversas regiões do país, médicos formados encontram oportunidades em hospitais, clínicas, postos de saúde, além de poderem atuar na área de pesquisa, ensino e gestão em saúde. A remuneração é uma das mais atraentes do mercado.",
                    skills: ["Diagnóstico clínico", "Procedimentos cirúrgicos", "Anamnese", "Interpretação de exames", "Atendimento de emergência", "Saúde coletiva", "Medicina baseada em evidências"],
                    tools: ["Prontuário eletrônico", "Equipamentos de diagnóstico", "Simuladores cirúrgicos", "Sistema de telemedicina", "Softwares de imagem médica"]
                },
                {
                    name: "Direito",
                    price: "R$ 1.450/mês",
                    duration: "5 anos",
                    desc: "Formação jurídica sólida com núcleos de prática jurídica.",
                    fullDesc: "O curso de Direito da Universidade Aurora prepara o aluno para as diversas áreas do Direito, com uma abordagem que combina teoria jurídica e prática forense. O curso conta com núcleos de prática jurídica onde os alunos atendem a comunidade gratuitamente, desenvolvendo competências práticas essenciais para a advocacia e carreira jurídica.",
                    market: "O Direito oferece um leque amplo de oportunidades profissionais: advocacia, magistratura, ministério público, carreiras jurídicas em empresas, consultoria, diplomacia e docência. Com as reformas legislativas recentes, há grande demanda por profissionais especializados em direito digital, compliance e direito ambiental.",
                    skills: ["Argumentação jurídica", "Elaboração de petições", "Oratória", "Negociação", "Pesquisa jurídica", "Mediação de conflitos", "Direito processual"],
                    tools: ["Jusbrasil", "Thomson Reuters", "PJe (Processo Judicial Eletrônico)", "Software de gestão de escritórios", "Bases de dados jurídicas"]
                },
                {
                    name: "Administração",
                    price: "R$ 1.120/mês",
                    duration: "4 anos",
                    desc: "Gestão empresarial com foco em inovação e empreendedorismo.",
                    fullDesc: "O curso de Administração da Universidade Aurora desenvolve profissionais capacitados para liderar organizações em um mercado globalizado e competitivo. A grade curricular inclui disciplinas de gestão estratégica, marketing digital, finanças corporativas e empreendedorismo. Os alunos participam de projetos reais com empresas parceiras e têm acesso a incubadoras de startups.",
                    market: "Administradores são profissionais versáteis com alta empregabilidade em diversos setores. Podem atuar como gestores, consultores, empreendedores ou em carreiras corporativas. Com a transformação digital, há crescente demanda por administradores com competências em gestão de dados, transformação digital e inovação.",
                    skills: ["Gestão estratégica", "Marketing digital", "Análise financeira", "Liderança", "Gestão de projetos", "Empreendedorismo", "Planejamento organizacional"],
                    tools: ["Excel avançado", "Power BI", "SAP", "Trello", "Google Analytics", "QuickBooks", "CRM Salesforce"]
                },
                {
                    name: "Arquitetura e Urbanismo",
                    price: "R$ 1.680/mês",
                    duration: "5 anos",
                    desc: "Design de espaços com sustentabilidade e inovação tecnológica.",
                    fullDesc: "O curso de Arquitetura e Urbanismo da Universidade Aurora forma profissionais capazes de projetar espaços funcionais, sustentáveis e esteticamente relevantes. O curso abrange projeto arquitetônico, urbanismo, paisagismo, interiores e patrimônio histórico. Os alunos trabalham em estúdios com orientação personalizada e participam de concursos de projetos.",
                    market: "Arquitetos e urbanistas têm atuação diversificada em escritórios de arquitetura, construtoras, órgãos públicos de planejamento urbano e como autônomos. Com a crescente preocupação com sustentabilidade e acessibilidade, profissionais especializados em green building e design universal são altamente requisitados.",
                    skills: ["Projeto arquitetônico", "Urbanismo", "Design de interiores", "Paisagismo", "BIM", "Sustentabilidade", "Patrimônio histórico"],
                    tools: ["AutoCAD", "SketchUp", "Revit", "V-Ray", "Lumion", "Adobe Photoshop", "Rhino 3D"]
                }
            ],
            semipresencial: [
                {
                    name: "Ciência da Computação",
                    price: "R$ 980/mês",
                    duration: "4 anos",
                    desc: "Desenvolvimento de software com aulas práticas presenciais.",
                    fullDesc: "O curso de Ciência da Computação da Universidade Aurora combina aulas online de teoria com encontros presenciais para laboratórios práticos e projetos em equipe. O aluno aprende desde os fundamentos da programação até inteligência artificial, segurança da informação e desenvolvimento de sistemas complexos. O curso inclui um período obrigatório de estágio em empresa de tecnologia.",
                    market: "O mercado de tecnologia é um dos mais dinâmicos e bem remunerados. Profissionais de ciência da computação são requisitados em startups, grandes empresas de tecnologia, bancos, e-commerce e setores diversos. Com a digitalização de todos os setores da economia, a demanda por desenvolvedores e cientistas de dados só tende a crescer.",
                    skills: ["Programação orientada a objetos", "Algoritmos e estruturas de dados", "Inteligência artificial", "Desenvolvimento web", "Banco de dados", "Segurança da informação", "DevOps"],
                    tools: ["Python", "Java", "React", "Node.js", "Docker", "Git", "TensorFlow"]
                },
                {
                    name: "Psicologia",
                    price: "R$ 1.250/mês",
                    duration: "5 anos",
                    desc: "Formação clínica com estágio supervisionado em clínicas parceiras.",
                    fullDesc: "O curso de Psicologia da Universidade Aurora oferece formação completa nas abordagens clínica, organizacional, educacional e social. Com encontros presenciais quinzenais para atividades práticas e supervisões, o aluno desenvolve competências clínicas e técnicas de intervenção psicológica. O curso conta com clínica escola e parcerias com hospitais e centros de referência.",
                    market: "Psicólogos atuam em consultórios, hospitais, empresas, escolas, órgãos públicos e ONGs. Há crescente demanda por profissionais em saúde mental, psicologia organizacional, neuropsicologia e psicologia do esporte. A telessaúde também abriu novas possibilidades de atuação remota.",
                    skills: ["Avaliação psicológica", "Terapia cognitivo-comportamental", "Psicoterapia", "Neuropsicologia", "Psicologia organizacional", "Aconselhamento", "Pesquisa em psicologia"],
                    tools: ["Testes psicológicos padronizados", "Software de gestão clínica", "Plataformas de telepsicologia", "EEG", "Ferramentas de neurofeedback"]
                },
                {
                    name: "Engenharia de Produção",
                    price: "R$ 1.350/mês",
                    duration: "5 anos",
                    desc: "Otimização de processos industriais e gestão da qualidade.",
                    fullDesc: "O curso de Engenharia de Produção forma profissionais aptos a otimizar processos produtivos, melhorar a qualidade e reduzir custos em organizações. O modelo semipresencial permite ao aluno estudar teoria online e participar de atividades práticas em laboratórios de simulação industrial e visitas técnicas a fábricas.",
                    market: "Engenheiros de produção são essenciais em indústrias, consultorias, logística e operações. Com a Indústria 4.0, há grande demanda por profissionais que dominem automação, análise de dados e gestão lean. São profissionais valorizados em multinacionais e grandes empresas brasileiras.",
                    skills: ["Gestão da qualidade", "Lean Manufacturing", "Logística", "Pesquisa operacional", "Gestão de projetos", "Automação industrial", "Análise de processos"],
                    tools: ["Minitab", "Arena", "SAP PP", "Six Sigma", "MS Project", "Python para análise de dados", "AutoCAD"]
                },
                {
                    name: "Enfermagem",
                    price: "R$ 1.150/mês",
                    duration: "4 anos",
                    desc: "Cuidados de saúde com prática clínica em hospitais.",
                    fullDesc: "O curso de Enfermagem da Universidade Aurora prepara profissionais para atuar na promoção, prevenção e recuperação da saúde. O modelo semipresencial combina disciplinas teóricas online com práticas clínicas em hospitais e unidades básicas de saúde parceiros. O aluno desenvolve competências técnicas e humanísticas essenciais para o cuidado em saúde.",
                    market: "Enfermeiros são profissionais essenciais e com alta empregabilidade em hospitais, clínicas, unidades de saúde, empresas e como autônomos. Com o envelhecimento da população e a expansão do SUS, a demanda por enfermeiros qualificados é constante. Há também oportunidades em pesquisas clínicas e gestão hospitalar.",
                    skills: ["Cuidados de enfermagem", "Administração de medicamentos", "Suporte vital básico", "Enfermagem cirúrgica", "Saúde da família", "Gestão hospitalar", "Cuidados intensivos"],
                    tools: ["Prontuário eletrônico", "Equipamentos de monitoramento", "Bombas de infusão", "Sistema de triagem", "Softwares de gestão hospitalar"]
                },
                {
                    name: "Contabilidade",
                    price: "R$ 890/mês",
                    duration: "4 anos",
                    desc: "Gestão contábil e fiscal com software profissional.",
                    fullDesc: "O curso de Ciências Contábeis da Universidade Aurora forma profissionais capacitados para gerir a contabilidade de empresas, escritórios de contabilidade e órgãos públicos. O modelo semipresencial permite o estudo das normas contábeis online com encontros presenciais para práticas em software contábil e análise de casos reais.",
                    market: "Contadores são indispensáveis em qualquer organização. O mercado é amplo e estável, com oportunidades em escritórios de contabilidade, empresas de todos os portes, órgãos governamentais e como profissionais autônomos. Com as mudanças na legislação tributária e a digitalização da contabilidade, há demanda por profissionais atualizados.",
                    skills: ["Contabilidade geral", "Auditoria", "Tributação", "Custos", "Contabilidade gerencial", "Perícia contábil", "Planejamento fiscal"],
                    tools: ["SPED", "Sistema Contábil Domínio", "Excel avançado", "SAP FI", "eSocial", "Software de auditoria", "Power BI"]
                }
            ],
            ead: [
                {
                    name: "Pedagogia",
                    price: "R$ 580/mês",
                    duration: "4 anos",
                    desc: "Formação docente com prática em escolas parceiras.",
                    fullDesc: "O curso de Pedagogia EaD da Universidade Aurora forma educadores preparados para atuar na educação infantil, ensino fundamental, gestão escolar e educação corporativa. O curso combina aulas online ao vivo e gravadas com encontros presenciais obrigatórios para estágios e práticas pedagógicas em escolas parceiras da rede pública e privada.",
                    market: "Pedagogos atuam como professores, coordenadores pedagógicos, diretores de escola, consultores educacionais e em empresas na área de treinamento e desenvolvimento. Com a valorização da educação e as novas tecnologias educacionais, há oportunidades crescentes em edtechs e ensino corporativo.",
                    skills: ["Didática", "Gestão escolar", "Psicopedagogia", "Alfabetização", "Tecnologia educacional", "Currículo escolar", "Avaliação educacional"],
                    tools: ["Google Classroom", "Moodle", "Khan Academy", "Canva para educação", "Plataformas de vídeoaula", "Ferramentas de gamificação"]
                },
                {
                    name: "Marketing Digital",
                    price: "R$ 650/mês",
                    duration: "3 anos",
                    desc: "Estratégias digitais com foco em resultados mensuráveis.",
                    fullDesc: "O curso de Marketing Digital EaD da Universidade Aurora é voltado para profissionais que desejam dominar as estratégias de marketing no ambiente digital. O curso abrange SEO, mídias sociais, marketing de conteúdo, e-mail marketing, Google Ads, analytics e gestão de marcas digitais. Projetos práticos com empresas reais complementam a formação.",
                    market: "O marketing digital é uma das áreas com maior crescimento e demanda no mercado. Profissionais qualificados são requisitados em agências, startups, e-commerces, empresas de todos os portes e como freelancers. Com a migração de orçamentos publicitários para o digital, as oportunidades só aumentam.",
                    skills: ["SEO e SEM", "Marketing de conteúdo", "Social media", "Google Ads", "Analytics", "Branding digital", "Copywriting"],
                    tools: ["Google Analytics", "Google Ads", "Facebook Ads Manager", "SEMrush", "Hootsuite", "Canva", "Mailchimp"]
                },
                {
                    name: "Design Gráfico",
                    price: "R$ 720/mês",
                    duration: "3 anos",
                    desc: "Criação visual para mídias digitais e impressas.",
                    fullDesc: "O curso de Design Gráfico EaD da Universidade Aurora desenvolve a criatividade e competências técnicas do aluno para criar soluções visuais impactantes. O curso abrange identidade visual, editoração, design web, motion graphics e UX/UI design. Aulas ao vivo, projetos práticos e um portfólio profissional ao final do curso.",
                    market: "Designers gráficos são requisitados em agências de publicidade, estúdios de design, departamentos de marketing de empresas, editoras e como freelancers. Com o crescimento do marketing digital, há grande demanda por designers que dominem tanto design para web quanto para mídias impressas.",
                    skills: ["Identidade visual", "Tipografia", "Editoração", "UX/UI Design", "Motion graphics", "Fotografia", "Ilustração"],
                    tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Adobe InDesign", "After Effects", "Blender", "Procreate"]
                },
                {
                    name: "Gestão de RH",
                    price: "R$ 590/mês",
                    duration: "3 anos",
                    desc: "Gestão de pessoas e cultura organizacional.",
                    fullDesc: "O curso de Gestão de Recursos Humanos EaD da Universidade Aurora forma profissionais aptos a gerir o capital humano das organizações. O curso abrange recrutamento e seleção, treinamento e desenvolvimento, gestão de desempenho, legislação trabalhista e cultura organizacional. Estudos de caso e projetos com empresas reais enriquecem a formação.",
                    market: "Profissionais de RH são essenciais em organizações de todos os portes. Com as mudanças no mundo do trabalho, há demanda por gestores de RH que dominem gestão por competências, employer branding, diversidade e inclusão, e people analytics. O home office também criou novas demandas para a área.",
                    skills: ["Recrutamento e seleção", "Treinamento e desenvolvimento", "Gestão de desempenho", "Legislação trabalhista", "People analytics", "Employer branding", "Gestão de conflitos"],
                    tools: ["SAP SuccessFactors", "LinkedIn Recruiter", "Workday", "Excel avançado", "Plataformas de assessment", "Softwares de feedback"]
                },
                {
                    name: "Logística",
                    price: "R$ 540/mês",
                    duration: "2 anos",
                    desc: "Cadeia de suprimentos e gestão de operações.",
                    fullDesc: "O curso de Logística EaD da Universidade Aurora prepara profissionais para gerir a cadeia de suprimentos, desde o fornecimento de matérias-primas até a entrega ao consumidor final. O curso abrange gestão de estoques, transporte, armazenagem, compras e logística reversa, com foco em eficiência e sustentabilidade.",
                    market: "Logística é uma área estratégica com alta empregabilidade. Com o crescimento do e-commerce e a complexidade das cadeias globais de suprimentos, logísticos são essenciais em indústrias, distribuidoras, e-commerces e operadores logísticos. Profissionais com domínio de tecnologia e sustentabilidade são especialmente valorizados.",
                    skills: ["Gestão de estoques", "Transporte", "Armazenagem", "Compras", "Logística reversa", "Planejamento de demanda", "Supply chain"],
                    tools: ["SAP WM", "WMS", "TMS", "Excel avançado", "Power BI", "ERP", "Simuladores de logística"]
                }
            ]
        };

        // ===== RENDER COURSE CARDS =====
        function renderCourses(category, gridId, images) {
            const grid = document.getElementById(gridId);
            const courses = courseData[category];
            grid.innerHTML = '';

            courses.forEach((course, index) => {
                const card = document.createElement('div');
                card.className = 'course-card';
                card.innerHTML = `
                    <div class="card-con