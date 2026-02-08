const javaRoadmap = [
    { title: "Java Basics", desc: "Sintaxe, Variáveis, Tipos de Dados" },
    { title: "POO", desc: "Classes, Objetos, Herança, Polimorfismo" },
    { title: "Coleções & Generics", desc: "List, Set, Map, Streams API" },
    { title: "JDBC & Banco de Dados", desc: "SQL, Conectividade, PostgreSQL" },
    { title: "Spring Boot", desc: "Injeção de Dependência, REST Controllers" },
    { title: "JPA & Hibernate", desc: "Persistência, Mapeamento Objeto-Relacional" },
    { title: "Security", desc: "JWT, Spring Security, Autenticação" }
];

const englishRoadmap = [
    { title: "Technical Vocab", desc: "Termos de programação e arquitetura" },
    { title: "Business Intro", desc: "E-mails, Slack, Comunicação diária" },
    { title: "Documentation", desc: "Lendo e escrevendo READMEs e Docs" },
    { title: "Meetings", desc: "Stand-ups, Reviews e Apresentações" },
    { title: "Interview Prep", desc: "Como falar da sua experiência e currículo" },
    { title: "Soft Skills", desc: "Negociação e Feedback construtivo" }
];

const nodeDetails = {
    "Java Basics": {
        "Ciclo de Vida": `
            <h2>O Ciclo de Vida do Código Java</h2>
            <p>Java não é apenas uma linguagem, é uma plataforma. O processo de transformar seu texto em algo que o processador entende é único.</p>
            
            <h3>1. Do Código ao Bytecode (O papel do <code>javac</code>)</h3>
            <p>Quando você escreve um arquivo <code>MeuPrograma.java</code>, ele é apenas texto. Para transformá-lo em algo que o Java entenda (Bytecode), usamos o <strong>Compilador Java (javac)</strong>.</p>
            <pre><code>// Comando no terminal:
javac MeuPrograma.java</code></pre>
            <p>Isso gera um arquivo <code>MeuPrograma.class</code>. Este arquivo contém <strong>Bytecode</strong>, que é um conjunto de instruções otimizadas para a JVM.</p>
            
            <h3>2. O Carregamento (ClassLoader)</h3>
            <p>Antes de rodar, o <strong>ClassLoader</strong> da JVM entra em ação. Ele carrega as classes em três níveis:</p>
            <ul>
                <li><strong>Bootstrap:</strong> Carrega classes básicas do Java (ex: <code>java.lang.*</code>).</li>
                <li><strong>Extension:</strong> Carrega bibliotecas extras.</li>
                <li><strong>Application:</strong> Carrega o seu código e as bibliotecas que você adicionou.</li>
            </ul>
            
            <h3>3. A Execução e o JIT</h3>
            <p>A JVM interpreta o Bytecode, mas para manter a performance, ela usa o <strong>JIT (Just-In-Time Compiler)</strong>. Ele identifica o "hot code" (partes que rodam muito) e as compila diretamente para código nativo do processador em tempo de execução.</p>
        `,
        "Estrutura Pro": `
            <h2>A Anatomia Técnica de uma Classe</h2>
            <p>Vamos dissecar o que cada palavra do seu programa realmente significa em nível de sistema.</p>
            <pre><code>public class Sistema { 
    public static void main(String[] args) { 
        System.out.println("Iniciando..."); 
    }
}</code></pre>
            <ul>
                <li><strong>public:</strong> Modificador que permite que a classe seja acessada por qualquer outro pacote. Essencial para o <code>main</code>, pois a JVM precisa "vê-lo".</li>
                <li><strong>static:</strong> Permite que o método seja chamado sem criar uma instância (objeto). O <code>main</code> deve ser estático porque a JVM o chama antes de qualquer objeto existir na memória.</li>
                <li><strong>void:</strong> O tipo de retorno. Indica o fim da pilha de execução para aquele método sem retorno de dados ao SO (Sistema Operacional).</li>
                <li><strong>String[] args:</strong> Parâmetros de linha de comando. Permite configurar o app no boot (ex: <code>java -jar app.jar --port=8080</code>).</li>
            </ul>
            <h3>Packages e Imports</h3>
            <p>Nenhuma classe vive sozinha. Usamos <code>package</code> para organizar o endereço da classe e <code>import</code> para trazer "ferramentas" de outros lugares. Sem o <code>import</code>, você teria que digitar o nome completo: <code>java.util.Scanner</code>.</p>
        `,
        "Memória & Tipos": `
            <h2>Memória e Tipagem Rígida</h2>
            <p>Java é <strong>Type Safe</strong>. Isso evita 70% dos erros triviais de programação.</p>
            
            <h3>1. Primitivos (Valores Puros)</h3>
            <p>Sempre vivem na pilha (Stack). Têm tamanhos fixos e nunca podem ser <code>null</code>.</p>
            <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                <tr style="border-bottom: 2px solid var(--primary);">
                    <th>Tipo</th><th>Bits</th><th>Range</th>
                </tr>
                <tr><td><code>byte</code></td><td>8</td><td>-128 a 127</td></tr>
                <tr><td><code>short</code></td><td>16</td><td>~32 mil</td></tr>
                <tr><td><code>int</code></td><td>32</td><td>~2 bilhões</td></tr>
                <tr><td><code>long</code></td><td>64</td><td>9 quintilhões</td></tr>
            </table>
            
            <h3>2. IEEE 754 e Precisão Decimal</h3>
            <p>Tipos <code>float</code> e <code>double</code> seguem a norma IEEE 754. <strong>Atenção:</strong> nunca use double para dinheiro! Eles sofrem de imprecisão binária (ex: 0.1 + 0.2 pode dar 0.30000000000000004). Para dinheiro, use <code>BigDecimal</code>.</p>
            
            <h3>3. Wrappers e Autoboxing</h3>
            <p>O Java converte automaticamente entre <code>int</code> e <code>Integer</code> (Autoboxing). Mas lembre-se: objetos no Heap pesam mais e exigem trabalho do <strong>Garbage Collector</strong>.</p>
        `,
        "Casting e Estouro": `
            <h2>Casting e Segurança de Dados</h2>
            <p>Converter tipos é como mover dados entre recipientes de tamanhos diferentes.</p>
            
            <h3>Widening vs Narrowing</h3>
            <pre><code>long giga = 10000000000L;
int pequeno = (int) giga; // PERIGO! </code></pre>
            <p>No exemplo acima, ocorre um <strong>Integer Overflow</strong>. Como o <code>int</code> só tem 32 bits, o Java simplesmente corta os bits extras à esquerda, resultando em um número totalmente diferente e imprevisível (muitas vezes negativo).</p>
            
            <h3>Valores Padrão</h3>
            <ul>
                <li>Atributos numéricos: <code>0</code></li>
                <li>Booleanos: <code>false</code></li>
                <li>Referências (Objetos): <code>null</code></li>
            </ul>
        `,
        "I/O Internals": `
            <h2>Entrada e Saída (O Mundo dos Streams)</h2>
            <p>Toda I/O no Java é baseada em <strong>Streams</strong> (fluxos de dados).</p>
            
            <h3>System.in, out e err</h3>
            <ul>
                <li><strong>out:</strong> Stream de saída padrão (console).</li>
                <li><strong>err:</strong> Stream de erro (geralmente aparece em vermelho no terminal).</li>
                <li><strong>in:</strong> Stream de entrada (teclado).</li>
            </ul>
            
            <h3>O Papel do Scanner</h3>
            <p>O <code>Scanner</code> é um "parser". Ele lê o Stream e tenta entender se aquele monte de bytes é um número ou um texto. Para aplicações de alta performance (ler arquivos gigas), profissionais usam o <code>BufferedReader</code>, que é mais rápido que o Scanner por usar um buffer interno maior.</p>
        `,
        "Operadores Bitwise": `
            <h2>Lógica de Baixo Nível (Bitwise)</h2>
            <p>Java permite que você manipule os bits individuais de um número. Útil para protocolos de rede, criptografia ou economia extrema de memória.</p>
            <ul>
                <li><code>&</code> (AND): 1 se ambos forem 1.</li>
                <li><code>|</code> (OR): 1 se algum for 1.</li>
                <li><code>^</code> (XOR): 1 se forem diferentes.</li>
                <li><code>~</code> (NOT): Inverte todos os bits.</li>
                <li><code><<</code> e <code>>></code>: Desloca os bits para esquerda/direita (multiplica ou divide por 2 rapidamente).</li>
            </ul>
            <pre><code>int x = 2; // binary 0010
int y = x << 1; // vira 0100 (4)</code></pre>
        `
    }
};

function createNode(data) {
    const node = document.createElement('a');
    node.className = 'roadmap-node';
    // Se o título for Java Basics, linka para o hub do módulo.
    if (data.title === "Java Basics") {
        node.href = 'topics/java-basics/index.html';
    } else {
        node.href = '#';
        node.onclick = (e) => {
            e.preventDefault();
            alert("Conteúdo em desenvolvimento...");
        };
    }

    node.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.desc}</p>
    `;
    return node;
}

function renderRoadmaps() {
    const javaContainer = document.getElementById('java-roadmap');
    const englishContainer = document.getElementById('english-roadmap');

    javaRoadmap.forEach(item => {
        javaContainer.appendChild(createNode(item));
    });

    englishRoadmap.forEach(item => {
        englishContainer.appendChild(createNode(item));
    });
}

document.addEventListener('DOMContentLoaded', renderRoadmaps);
