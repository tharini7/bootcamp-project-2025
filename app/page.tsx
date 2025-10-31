// You can name the function within page.tsx anything you want.
export const metadata = { title: "Tharini — Home" };    
export default function Home() {
          return (
            <div>
              
                <main>
                  <h1 className="index-title"></h1>
                  <div className="about">
                    <div className="about-image">
                      <img src="IMG_1732.jpg" alt="Photo of Tharini" />
                    </div>
                    <div className="about-text">
                      <p>
                        Hi my name is<strong> Tharini Senthil</strong>. I am a first year
                        computer science major from Seattle, Washington.
                      </p>
                      <p>
                        Some of my hobbies include singing and acting. I also love going to
                        the beach wiht my friends! I am very excited to be working with
                        Hack4Impact and develping cool projects!
                      </p>
                    </div>
                  </div>
                </main>
              
            </div>
          ) 
        }