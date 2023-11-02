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
                        href="https://s.studiobinder.com/wp-content/uploads/2020/05/Plato_s-Allegory-of-the-Cave.pdf"
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
                        href="https://www.sanjuan.edu/cms/lib8/CA01902727/Centricity/Domain/3981/Death%20of%20A%20Moth-Virginia%20Woolf%20copy.pdf"
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
                          class="btn btn-light"
                          target="_blank"
                        >
                          read
                        </a>
                      </div>
                      <div class="col">
                        <a
                          target="_blank"
                          href="https://www.youtube.com/watch?v=nk9_1oww4FY"
                          class="btn btn-dark"
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
                          class="btn btn-light"
                          target="_blank"
                        >
                          read
                        </a>
                      </div>
                      <div class="col">
                        <a
                          target="_blank"
                          href="https://www.youtube.com/watch?v=9XGUpKITeJM"
                          class="btn btn-dark"
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
                          class="btn btn-light"
                          target="_blank"
                        >
                          read
                        </a>
                      </div>
                      <div class="col">
                        <a
                          target="_blank"
                          href="https://www.youtube.com/watch?v=OyBNmecVtdU"
                          class="btn btn-dark"
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
                        href="https://www.google.com/search?q=liam+hildreth&sca_esv=578964369&sxsrf=AM9HkKndLD-LwHQqtIt0v4vw7JE3J57TlA%3A1698963836198&source=hp&ei=fCFEZcPaCfSG0PEP7vizuAo&iflsig=AO6bgOgAAAAAZUQvjO6m6O5yeaTnRM2odYpHjIOhtjCu&ved=0ahUKEwjDiMO_raaCAxV0AzQIHW78DKcQ4dUDCAw&uact=5&oq=liam+hildreth&gs_lp=Egdnd3Mtd2l6Ig1saWFtIGhpbGRyZXRoMgcQIxiKBRgnMggQABiKBRiGAzIIEAAYigUYhgNI2hdQAFioFXAAeACQAQCYAb0BoAHJDKoBBDEuMTK4AQPIAQD4AQHCAgQQIxgnwgIOEAAYigUYsQMYgwEYkQLCAggQABiKBRiRAsICERAuGIMBGMcBGLEDGNEDGIAEwgIOEC4YgAQYsQMYxwEY0QPCAhEQLhiABBixAxiDARjHARjRA8ICCxAuGIoFGLEDGIMBwgIFEAAYgATCAgcQABiKBRhDwgILEC4YgwEYsQMYgATCAgsQABiABBixAxiDAcICCxAAGIoFGLEDGJECwgIKEAAYigUYsQMYQ8ICDRAuGIoFGLEDGIMBGEPCAgoQLhiKBRixAxhDwgIIEC4YgAQYsQPCAgsQLhiABBixAxiDAcICCBAAGIAEGLEDwgIIEC4YsQMYgATCAgUQLhiABMICBhAAGBYYHsICCBAAGBYYHhgK&sclient=gws-wiz"
                        style={{ textDecoration: "none" }}
                      >
                        Black Box
                      </a>
                    </h5>
                    <p class="body"> A short story. </p>
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
                  <div class="card-header border-light">capella</div>

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
                  <div class="card-header border-light">capella</div>

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
                  <div class="card-header border-light">fun</div>

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
                      {" "}
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
