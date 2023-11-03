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
            <br />
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
            <h5 className="titles text-center vertical-align text-lg-start"></h5>
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5 class="card-title">
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
                    <h5 class="card-title">
                      <a
                        href="https://www.indwes.edu/academics/jwhc/_files/plato_s%20allegory%20of%20the%20cave.pdf"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        The Allegory of the Cave
                      </a>
                    </h5>
                    <p class="body">By Plato</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        href="https://docenti.unimc.it/sharifah.alatas/teaching/2019/21609/files/Woolf_DeathoftheMoth.pdf"
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
                    <h5 class="card-title">
                      <a
                        href="https://www.rogerscruton.com/homepage/about/music/understanding-music/187-effing-the-ineffable"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Effing the Ineffable
                      </a>
                    </h5>
                    <p class="body">By Sir Roger Scruton</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3678365"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Fourteen Maxims
                      </a>
                    </h5>
                    <p class="body">By Bruce Pardy</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5 class="card-title">
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
                    <h5 class="card-title">
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
                    <h5 class="card-title">
                      <a
                        href="https://www.archives.gov/founding-docs/declaration-transcript"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Decleration of Independence
                      </a>
                    </h5>
                    <p class="body">By Thomas Jefferson</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5 class="card-title">
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
            </div>

            <br />
            <h5 className="titles text-center text-lg-start"></h5>
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5 class="card-title">
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
                    <h5 class="card-title">
                      <a
                        href="https://www.poetryfoundation.org/poems/50643/sonnet-1-from-fairest-creatures-we-desire-increase"
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
                    <h5 class="card-title">
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
                    <h5 class="card-title">
                      <a
                        href="https://poets.org/poem/unperfect-actor-stage-sonnet-23"
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
                    <h5 class="card-title">
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
                    <h5 class="card-title">
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
                    <h5 class="card-title">
                      <a
                        href="https://allpoetry.com/The-Palace-of-Art"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        The Palace of Art
                      </a>
                    </h5>
                    <p class="body">By Alfred Lord Tennyson</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        href="https://allpoetry.com/poem/14326903-The-Two-Voices-by-Alfred-Lord-Tennyson"
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
            </div>
            <br />
            <div class="row">
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5 class="card-title">Banquet speech</h5>
                    <p class="body">William Faulkner</p>

                    <div class="row">
                      <div class="col">
                        <a
                          href="https://www.nobelprize.org/prizes/literature/1949/faulkner/speech/"
                          style={{ textDecoration: "none" }}
                          target="_blank"
                        >
                          read
                        </a>
                      </div>
                      <div class="col">
                        <a
                          target="_blank"
                          href="https://www.youtube.com/watch?v=nk9_1oww4FY"
                          style={{ textDecoration: "none" }}
                        >
                          listen
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5 class="card-title">Student Speech</h5>
                    <p class="body">Donovan Livingston</p>

                    <div class="row">
                      <div class="col">
                        <a
                          href="https://www.gse.harvard.edu/ideas/news/16/05/lift"
                          style={{ textDecoration: "none" }}
                          target="_blank"
                        >
                          read
                        </a>
                      </div>
                      <div class="col">
                        <a
                          target="_blank"
                          href="https://www.youtube.com/watch?v=9XGUpKITeJM"
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
                  <div class="card-body">
                    <h5 class="card-title">Farewell Address </h5>
                    <p class="body">Dwight D. Eisenhower</p>

                    <div class="row">
                      <div class="col">
                        <a
                          href="https://www.archives.gov/milestone-documents/president-dwight-d-eisenhowers-farewell-address"
                          style={{ textDecoration: "none" }}
                          target="_blank"
                        >
                          read
                        </a>
                      </div>
                      <div class="col">
                        <a
                          target="_blank"
                          href="https://www.youtube.com/watch?v=OyBNmecVtdU"
                          style={{ textDecoration: "none" }}
                        >
                          watch
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div className="col-12 col-md-6 ps-4 border-left">
            <br />
            <div class="row row-cols-1  row-cols-lg-2  g-4">
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-header border-light">art</div>

                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        target="_blank"
                        href="https://www.google.com/search?q=what+is+censorship&sca_esv=578964369&sxsrf=AM9HkKmqM64NemNFI3DQhv_mLz2ab-YIVw%3A1698987328455&ei=QH1EZcG2G52U5OMP4qyMYA&oq=what+is+&gs_lp=Egxnd3Mtd2l6LXNlcnAiCHdoYXQgaXMgKgIIADIHECMYigUYJzIEECMYJzIIEAAYigUYkQIyCBAAGIoFGJECMggQABiKBRiRAjIFEAAYgAQyCxAAGIoFGLEDGIMBMggQABiABBixAzILEAAYigUYsQMYgwEyCBAAGIAEGLEDSOAaUO8HWPEPcAR4AJABAJgBZ6ABuQWqAQM1LjO4AQPIAQD4AQHCAggQABiABBiwA8ICCxAAGIoFGIYDGLADwgILEC4YgAQYsQMYgwHCAgsQABiABBixAxiDAcICERAuGIAEGLEDGIMBGMcBGNEDwgIHEAAYigUYQ8ICCBAuGIAEGLEDwgIIEAAYgAQYyQPCAggQABiKBRiSA-IDBBgBIEGIBgGQBgQ&sclient=gws-wiz-serp"
                        style={{ textDecoration: "none" }}
                      >
                        Black Box
                      </a>
                    </h5>
                    <p class="body"> A short story I aim to expand into a novel eventually. </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-header border-light">art</div>

                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1JzPugCIKrRUUw_gsIU7Q6PdblB-yuB3V/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Butterflies
                      </a>
                    </h5>
                    <p class="body"> A few poems. </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-header border-light">ideas</div>

                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1MTBGVhXjet0FJ2RvGwTBjzAzGyfmTCUW/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Capella
                      </a>
                    </h5>{" "}
                    <p class="body">
                      An analysis of the issues facing the web today and a plan
                      for a potential solution.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-header border-light">ideas</div>

                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1xcfxPE_8R0T4Rh97Y9jxK3NutZAT61TO/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        The Game of Ideas
                      </a>
                    </h5>
                    <p class="body">
                      An article examining social media as a game and an
                      introduction to Capella.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-header border-light">ideas</div>

                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1hhiwti2i3WohOn2cb2kq8lqUY00RkON6/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        The Game of Fingers
                      </a>
                    </h5>
                    <p class="body">
                      An attempt at modelling the economics of a drinking game I
                      play with friends.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-header border-light">university</div>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1t3b-voXs8QQvjW_HKpN6-ia1YWOTY-Dw/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        The Tumultuous Journey of Detroit's Big Three Automakers
                        Through the Great Recession and COVID-19 Pandemic
                      </a>
                    </h5>
                    <p class="body"> </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-header border-light">high school</div>
                  <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="body">
                      Co-head prefect address to our graduating class, parents,
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
                  <div class="card-header border-light">high school</div>
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
                  <div class="card-header border-light">high school</div>
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
        <br />
      </div>
    );
  }
}

export default words;
