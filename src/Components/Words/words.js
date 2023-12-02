import React, { Component } from "react";
import breath from "../../whenbreathbecomesair.jpg";
import "./words.css";
import lecture from "../../lastlecture.jpg";
import gods from "../../againstthegods.jpg";
import msfm from "../../msfm.jpg";
import { colors } from "@material-ui/core";

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
                        href="https://www2.hawaii.edu/~freeman/courses/phil360/16.%20Myth%20of%20Sisyphus.pdf"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        The Myth of Sisyphus
                      </a>
                    </h5>
                    <p class="body">By Albert Camus</p>
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
                        href="https://deliverypdf.ssrn.com/delivery.php?ID=433000088031099030111106074095017124028072042008084011092127082113084029108097082005098003032035018116033081110105112021083083106080012039033091064105119068025061077034073089086096103086070081107090075076065010000097005086065031112125067072101086&EXT=pdf&INDEX=TRUE"
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
                        href="https://quod.lib.umich.edu/cgi/r/rsv/rsv-idx?type=citation&book=Matthew&chapno=5&startverse=1&endverse=12#:~:text=Matt.,5%20Verses%201%20to%2012&text=%5B3%5D%20%22Blessed%20are%20the,for%20they%20shall%20be%20satisfied."
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Matthew 5:3–12
                      </a>
                    </h5>
                    <p class="body">Bible, Revised Standard Version</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5 class="card-title">
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
                        href="https://www.poetryfoundation.org/poems/43291/sailing-to-byzantium"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Sailing to Byzantium
                      </a>
                    </h5>
                    <p class="body">By William Butler Yeats</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        href="https://www.poetryfoundation.org/poems/45319/the-charge-of-the-light-brigade"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        The Charge of the Light Brigade
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
                        href="https://d.lib.rochester.edu/camelot/text/tennyson-epilogue-to-the-queen"
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
                    <h5 class="card-title">Fairwell Address</h5>
                    <p class="body">Dwight D. Eisenhowerr</p>

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
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5 class="card-title">
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
                    <h5 class="card-title">
                      <a
                        target="_blank"
                        href="https://www.youtube.com/watch?v=4KOOmA_YUMo"
                        style={{ textDecoration: "none" }}
                      >
                        What Do You Desire?
                      </a>
                    </h5>
                    <p class="body">By Alan Watts</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-body">
                    <h5 class="card-title">
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
            </div>
            <br />
          </div>
          <div className="col-12 col-md-6 ps-4 border-left">
            <div class="row row-cols-1  row-cols-lg-2  g-4">
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-header border-light">open letter</div>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1Sed4X--VVtxu4Z9lHIVF3kPJeiKcjyAE/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Letter to Santa
                      </a>
                    </h5>
                    <p class="body">
                      <i>O Captain! my Captain!</i>
                    </p>
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
                        href="https://drive.google.com/file/d/1i_KzyXTipq4J-T9s9RWtwCtAphVyhitg/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        CV
                      </a>
                    </h5>
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
                        href="https://drive.google.com/file/d/1ASFcmxC-MO2D8kwOAKP-4Dhhfg5L1Ibn/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Butterflies II
                      </a>
                    </h5>
                    <p class="body"> A few poems. </p>
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
                        href="https://drive.google.com/file/d/1AiBVQZU0csqc-zQt93MP-VBH1_l1twJg/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Butterflies
                      </a>
                    </h5>
                    <p class="body">
                      A collection of poems aiming to dance between early modern
                      english and english.
                    </p>
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
                        href="https://drive.google.com/file/d/1dUPD_4pwVcq7rMPQEC5O3IcjSnKeoXVd/view?usp=F"
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
                        href=" https://drive.google.com/file/d/18RvDbLtFOT3k4zwMVHQVcNav-kpsYk28/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Level High
                      </a>
                    </h5>
                    <p class="body">
                      Poem about tree planting in High Level, Alberta.
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
                        href="https://drive.google.com/file/d/1xPToGCADWr2dJsVaMMBwcbP_Yfkjz10v/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Capella
                      </a>
                    </h5>
                    <p class="body">
                      An analysis of the issues facing the web today and a idea
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
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-header border-light">high school</div>
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
                      A poem for grade 12 english aiming to beat the drums of
                      Howl by Allen Ginsberg.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 border-light">
                  <div class="card-header border-light">junior school</div>

                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1KiKJ1Bl7zrSLceskggieGSHrr2H5hgZN/view?usp=sharing"
                        style={{ textDecoration: "none" }}
                      >
                        Letter Home to Ukraine
                      </a>
                    </h5>
                    <p class="body">A letter for grade 8 english.</p>
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
