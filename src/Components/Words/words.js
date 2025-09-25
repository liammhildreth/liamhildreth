import React, { Component } from "react";
import breath from "../../whenbreathbecomesair.jpg";
import "./words.css";
import lecture from "../../lastlecture.jpg";
import gods from "../../againstthegods.jpg";
import msfm from "../../msfm.jpg";

class words extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-12 col-md-6 pe-4 border-right border-md">
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
              <div class="col">
                <div class="card">
                  <img
                    src={breath}
                    class="card-img-top"
                    width={100}
                    height={200}
                    alt="..."
                  ></img>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img
                    src={gods}
                    class="card-img-top"
                    width={100}
                    height={200}
                    alt="..."
                  ></img>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img
                    src={lecture}
                    class="card-img-top"
                    width={100}
                    height={200}
                    alt="..."
                  ></img>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img
                    src={msfm}
                    class="card-img-top"
                    width={100}
                    height={200}
                    alt="..."
                  ></img>
                </div>
              </div>
            </div>
            <br />
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://www.ibiblio.org/ebooks/Thoreau/Civil%20Disobedience.pdf"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        On the Duty of Civil Disobedience
                      </a>
                    </h5>
                    <p class="body">By Henry David Thoreau</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://gutenberg.net.au/ebooks12/1203811h.html"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        The Death of the Moth
                      </a>
                    </h5>
                    <p class="body">By Virginia Woolf</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://www.africa.upenn.edu/Articles_Gen/Letter_Birmingham.html"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Letter From Birmingham Jail
                      </a>
                    </h5>
                    <p class="body">By Martin Luther King Jr.</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://paulgraham.com/useful.html"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        How to Write Usefully
                      </a>
                    </h5>
                    <p class="body">By Paul Graham</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://paulgraham.com/work.html"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        What Doesn't Seem Like Work
                      </a>
                    </h5>
                    <p class="body">By Paul Graham</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://paulgraham.com/know.html"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        How You Know
                      </a>
                    </h5>
                    <p class="body">By Paul Graham</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://paulgraham.com/talk.html"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Write Like You Talk
                      </a>
                    </h5>
                    <p class="body">By Paul Graham</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        target="_blank"
                        href="https://www.usna.edu/Ethics/_files/documents/stoicism1.pdf"
                        style={{ textDecoration: "none" }}
                      >
                        The Stoic Warrior's Triad
                      </a>
                    </h5>
                    <p class="body">By James B. Stockdale</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://www.usna.edu/Ethics/_files/documents/Stoicism2.pdf"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Master of My Fate
                      </a>
                    </h5>
                    <p class="body">By James B. Stockdale</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://quod.lib.umich.edu/cgi/r/rsv/rsv-idx?type=citation&book=Matthew&chapno=5&startverse=1&endverse=12#:~:text=Matt.,5%20Verses%201%20to%2012&text=%5B3%5D%20%22Blessed%20are%20the,for%20they%20shall%20be%20satisfied."
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Matthew 5:1–12
                      </a>
                    </h5>
                    <p class="body">Bible</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://www.artofmanliness.com/invictus-william-ernest-henley/"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Invictus
                      </a>
                    </h5>
                    <p class="body">By William Ernest Henley</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://drive.google.com/file/d/1l82ItMDNQFFvkToMIZWj6FxBZS8Dm8Sk/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        The Coming of Wisdom with Time
                      </a>
                    </h5>
                    <p class="body">By William Butler Yeats</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://www.poetryfoundation.org/poems/45392/ulysses"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Ulysses
                      </a>
                    </h5>
                    <p class="body">By Alfred Lord Tennyson</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://kalliope.org/en/text/tennyson1999063013"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        To the Queen
                      </a>
                    </h5>
                    <p class="body">By Alfred Lord Tennyson</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://americanliterature.com/author/alfred-lord-tennyson/poem/the-two-voices"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        The Two Voices
                      </a>
                    </h5>
                    <p class="body">By Alfred Lord Tennyson</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://www.folger.edu/explore/shakespeares-works/shakespeares-sonnets/read/1/"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Sonnet I
                      </a>
                    </h5>
                    <p class="body">By William Shakespeare</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://shakespeare.folger.edu/shakespeares-works/shakespeares-sonnets/sonnet-14/"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Sonnet XIV
                      </a>
                    </h5>
                    <p class="body">By William Shakespeare</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://www.folger.edu/explore/shakespeares-works/shakespeares-sonnets/read/23/"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Sonnet XXIII
                      </a>
                    </h5>
                    <p class="body">By William Shakespeare</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://sanskritdocuments.org/doc_deities_misc/salutedawn.html"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Salutation of the Dawn
                      </a>
                    </h5>
                    <p class="body">By Kalidasa</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://www.youtube.com/watch?v=DV4EDr1cM-Q"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        On Yoga
                      </a>
                    </h5>
                    <p class="body">By Alan Watts</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://www.youtube.com/watch?v=RBGJ8uyAT24"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Ways of Liberation
                      </a>
                    </h5>
                    <p class="body">By Alan Watts</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://www.youtube.com/watch?v=7-tKZ2ND3vg"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        The Altar of Freedom
                      </a>
                    </h5>
                    <p class="body">By Jocko Willink</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://www.youtube.com/watch?v=nk9_1oww4FY"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Banquet Speech
                      </a>
                    </h5>
                    <p class="body">
                      <a
                        href="https://www.nobelprize.org/prizes/literature/1949/faulkner/speech/"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_blank"
                      >
                        By William Faulkner
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      class="card-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 45,
                      }}
                    >
                      <a
                        href="https://www.youtube.com/watch?v=9XGUpKITeJM"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Student Speech
                      </a>
                    </h5>{" "}
                    <p class="body">
                      <a
                        href="https://www.gse.harvard.edu/ideas/news/16/05/lift"
                        style={{ textDecoration: "none", color: "black" }}
                        target="_blank"
                      >
                        By Donovan Livingston
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div className="col-12 col-md-6 ps-4 border-left">
            <div class="row row-cols-1  row-cols-lg-2  g-4">
                     <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 100,
                      }}
                    >
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1Hpfak0m4Sl_uN-XdhINAAk6guM3Vbqtg/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        The Holy Grail
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 100,
                      }}
                    >
                      <a
                        target="_blank"
                        href="https://docs.google.com/document/d/1P1W2qp1DepZD2ywuQ69SPaQCTzzIBSM-kxcU7WYd6lk/edit?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Restraining Order for Eric Schmidt and Marc Andreessen
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 100,
                      }}
                    >
                      <a
                        target="_blank"
                        href="https://docs.google.com/document/d/1lD2eO78MDHiVNtSGm8FyDtjTHzb71kdmnmzlnk10eWY/edit?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Nirvana
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5>
                      <div class="row">
                        <p style={{ textDecoration: "none" }} class="body">
                          Sit. Rep.
                        </p>
                      </div>
                      <div class="row">
                        <div class="col">
                          <a
                            target="_blank"
                            href="https://docs.google.com/document/d/1EEOYvFSUqOukJ3gXSGkqozgZIH-vwCh4uym7j79S7dQ/edit?usp=sharing"
                            style={{ textDecoration: "none" }}
                          >
                            Short
                          </a>
                        </div>
                        <div class="col">
                          <a
                            target="_blank"
                            href="https://docs.google.com/document/d/1SvPBkykAH6YYeEImjDUsDMvYsXby7-RnAUSKcz_Sw0E/edit?usp=sharing"
                            style={{ textDecoration: "none" }}
                          >
                            Long
                          </a>
                        </div>
                      </div>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 100,
                      }}
                    >
                      <a
                        target="_blank"
                        href="https://docs.google.com/spreadsheets/d/1FOrwnisjj7FLh_3nTJrFytWKxKfmnQO1EwayKqua_u0/edit?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Chess
                      </a>
                    </h5>
                  </div>
                </div>
              </div>


              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 100,
                      }}
                    >
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1Sed4X--VVtxu4Z9lHIVF3kPJeiKcjyAE/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Letter to Santa
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 100,
                      }}
                    >
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/18d32g2rIelmlDHIxgc0XGqO93C0TfQdp/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Freedom of Soul
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 100,
                      }}
                    >
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1RTxi7lIxPg_ilvUBOct3K9nk1uyyEEfH/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Butterflies
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 100,
                      }}
                    >
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1xPToGCADWr2dJsVaMMBwcbP_Yfkjz10v/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Capella
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 100,
                      }}
                    >
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1xcfxPE_8R0T4Rh97Y9jxK3NutZAT61TO/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        The Game of Ideas
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 100,
                      }}
                    >
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1hhiwti2i3WohOn2cb2kq8lqUY00RkON6/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        The Game of Fingers
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-header border-light">
                    Western University{" "}
                  </div>
                  <div class="card-body">
                    <h5
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 100,
                      }}
                    >
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1t3b-voXs8QQvjW_HKpN6-ia1YWOTY-Dw/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        The Tumultuous Journey of Detroit's Big Three Automakers
                        Through the Great Recession and COVID-19 Pandemic
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-header border-light">
                    Trinity College School
                  </div>
                  <div class="card-body">
                    <p class="body">
                      Head Prefects' Address to our graduating class, parents,
                      and faculty.
                    </p>
                    <div class="row">
                      <div class="col">
                        <a
                          target="_blank"
                          href="https://drive.google.com/file/d/1m_M1ogfmv6etTJvbL---UX93VwLvk0Kp/view?usp=sharing"
                          style={{ textDecoration: "none" }}
                        >
                          read
                        </a>
                      </div>
                      <div class="col">
                        <a
                          target="_blank"
                          href="https://www.youtube.com/watch?v=WLuPZiyE4Rk"
                          style={{ textDecoration: "none" }}
                        >
                          watch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-header border-light">
                    Trinity College School
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1lRCemf_RlOKtIi3AGKfGZZqksBXSQtQP/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Yowl
                      </a>
                    </h5>
                    <p class="body">
                      A poem for grade 12 english aiming to beat the drum of
                      Howl by Allen Ginsberg.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-header border-light">
                    Trinity College School
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/19jZMAXso3YVrTOFe28RAhvKPLDLtKxXW/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Corruption Within FIFA: the Qatar 2022 ‘Winter’ World
                        Cup
                      </a>
                    </h5>
                    <p class="body">Final paper for grade 12 kinesiology. </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-header border-light">
                    Trinity College School
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1OEXBnvgYgdkwzkuOUBKFjq1qG5gnBrpm/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        TCS ad
                      </a>
                    </h5>
                    <p class="body">A grade 12 business project. </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default words;
