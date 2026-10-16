Aplique o sistema de marca Casa di Grazi v1.1 ao site e ao app. Mantenha a estrutura e as funções que já existem. Mude só a aparência e os textos de interface.

TEMA
1. Substitua o bloco @layer base { :root {...} .dark {...} } do src/index.css pelo conteúdo de marca/tokens/shadcn-lovable.css.
2. Mescle marca/tokens/tailwind.config.snippet.js em theme.extend do tailwind.config.
3. Não use cores fora dos tokens. Nada de hex solto nos componentes.

TIPOGRAFIA
- Títulos (h1, h2, h3, títulos de página): Instrument Serif, peso normal, itálico só em uma palavra de destaque. Nunca em negrito, nunca abaixo de 20 px.
- Texto e interface: Instrument Sans.
- Rótulos, botões e nomes de sabor: Instrument Sans condensada (font-stretch: 75%), peso 600, caixa-alta, espaçamento de 0,08em.
- Dados (lote, datas, temperatura, tempo, códigos, números de tabela): DM Mono, 11 a 13 px, caixa-alta, tabular-nums.
- Remova Inter, EB Garamond e qualquer outra fonte.

FORMA
- Sem sombras em nenhum componente (shadow-none).
- Raio de 2 px (máximo 4 px). Remova rounded-xl, rounded-2xl e rounded-full, exceto no selo circular da marca e em avatares.
- Cartões: fundo bg-card com borda de 1 px (border-border). Sem faixa colorida lateral, sem fundo pastel.
- Ícones: Lucide com strokeWidth 1.5, sempre com rótulo ao lado.
- Movimento: transições de 120 a 320 ms, curva cubic-bezier(0.2, 0.7, 0.2, 1), sem quicar. Respeitar prefers-reduced-motion.

COR COMO SIGNIFICADO
- Botão principal: bg-primary (Basilico). Pizza pode usar Rosso no card de pizza.
- Pizza é sempre Rosso (text-pizza, bg-pizza). Focaccia é sempre Basilico (text-focaccia, bg-focaccia). Vale também para gráficos.
- Todo produto mostra seu estado em selo: "Congelada" (pizza) ou "Fresca" (focaccia). Nunca só na descrição.
- Status do app: success, warning, danger, info, sempre com texto ou ícone, nunca só a cor.
- Verde da logo (#049A56) só em áreas grandes e selos, nunca em texto pequeno.

SITE
- Título da página: "Pizza Artesanal Congelada e Focaccia Fresca em Uberlândia | Casa di Grazi".
- H1: "Pizza artesanal congelada e focaccia fresca em Uberlândia."
- Ordem das seções: hero, pizza × focaccia, pizzas, focaccias, como funciona, como finalizar a pizza, como servir a focaccia, a Grazi, Shakira, depoimentos, perguntas, CTA final.
- CTA principal: "Pedir no WhatsApp". Secundário: "Ver cardápio". Recompra: "Repor o freezer". Focaccia: "Encomendar focaccia".
- Nunca publicar endereço residencial. Não inventar sabor, preço, validade ou disponibilidade: use os dados já cadastrados e deixe em branco o que não existir.
- Sem promessas de saúde ("mais saudável", "sem culpa", "melhor digestibilidade").

APP
- Fundo bg-background, superfícies bg-card com borda, tabela com linha de 48 px (40 px no modo compacto).
- Cabeçalho lateral com "CASA DI GRAZI" em condensada e filete, até a assinatura tipográfica ser aprovada. O selo da marca entra grande na tela de login.
- Mensagens curtas, nomeiam o item e dizem o próximo passo. Estado vazio: "Nenhum pedido hoje. O forno está livre." Erro: "Não consegui salvar o pedido. Confira a conexão e tente de novo." Sem "Ops!" e sem exclamação.
- Alvos de toque de 44 px, campos com 16 px ou mais no celular.

ACESSIBILIDADE
- Texto com contraste mínimo de 4,5:1 (3:1 para texto grande). Foco visível: anel de 2 px.
- Texto alternativo que descreve produto e cena.

LOGO
- Use os SVGs de marca/logo/. Nunca use o JPEG antigo nem redesenhe a logo.
- CDG_logo_selo_simples.svg no site, no app e nas redes. CDG_logo_selo_completo.svg em telas grandes (hero, login).
- Fundos escuros: CDG_logo_selo_1cor_farinha.svg ou o selo completo (o disco branco sustenta).
- Tamanho mínimo do selo: 140 px. Abaixo disso, use o texto "CASA DI GRAZI" em condensada.
- Respeite a área de proteção (10% do diâmetro) e não aplique efeitos, sombra ou rotação.

Referência completa: marca/manual-de-marca-v1.1.html
