import './index.scss'

function Rodape() {
  return (
    <footer>
                <div>
                    <h1>jkoutlet<span style={{color: "#FF4848"}}>.</span> </h1>
                    <p>Loja virtual - Pronta entrega</p>
                </div>

                <div>
                    <h3>Links úteis</h3>
                    <a href="">Início</a>
                    <a href="">Produtos</a>
                    <a href="">Contato</a>
                    <a href="">Quem somos</a>
                </div>

                <div>
                    <h3>Rede Sociais</h3>
                    <a href="">Instagram</a>
                    <a href="">Whatsapp</a>
                    
                </div>

                <div className="newsletter">
                    <h3>NewsLetter</h3>
                    <p>Digite seu e-mail e seja avisado sobre novidades.</p>

                     <form action="https://formsubmit.co/joaopedromesq123@gmail.com" method="POST">
                        <input type="email" name="email" required placeholder="Seu endereço de email:"/>
                        <input type="hidden" name="_captcha" value="false"/>
                        <input type="hidden" name="_template" value="table"/>
                        <input type="hidden" name="_next" value="http://localhost:3000"/>
                        <button type="submit">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbNJREFUSEvV1U2ID3EYB/DP5vVAcsEqtQ5qD8iRC8WeXFzUZkuJUpu3WkKUlxw2JwcOysEBeyUXJS4OIgcHF07blhM5bJtkKeb59/trmmb+M/NnD57bNM98v8/L9/nOgAWOgQXG918R7MJpbMSW7mT+RQf7cB7bE+h3LP9bgkU4gHPYXNjjJ6ztlyAqO4IzGKoQyAcMtyVYhWM4hTU1ynuFHU0JotUJjGNlQ0k/wd46glBCLO4QllYAf8NL7Cm8v4+DVQQhr4vYj1hkWczjNu7hKVYXkm7hRBnBVFJG1SR+4S6uZnqfw2tsKkm+hktlBNM9lPEQF/AeS/AMOysqiZ3dKCNYlmZ3MneJAXQWb3NgDzDWY+GHU6edlKpL3p3ePS8AXc6er9SoKS77cZ2KyjCi6qi+LsKTXvRDEKOLPfyxgQqmrXjXhmAkLTW+WYxRHM+ZW5FnAz62IQh5vsEkHiGeI7YlAcTNhLK6sQJf2xJ088PIwpPyy1+fOjqKn9kRrsu31OR/0K34c1LQnezaf5TMPyxlEDNtCb7gOm5m/h/+0yqadBBWPdsKNZfchKBf7M53vwF4sUIZUrZYwwAAAABJRU5ErkJggg=="/>
                        </button>
                    </form> 
                </div>
      </footer>
  )
}

export default Rodape;