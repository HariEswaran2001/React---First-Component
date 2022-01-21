import React from "react";
import ReactDom from "react-dom";
import "./webpage2.css";

function Webpage() {
  return (
    <section>
      <Header1 />
      <Header2 />
      <Trending />
      <Home1 />
      <Division3 />
      <Division4 />
      <Footer></Footer>
    </section>
  );
}

function Header1() {
  return (
    <section className="flex">
      <div className="flex-about">
        <p>About</p>
        <p className="pad-forum">Forum</p>
        <p className="pad-bn">Buy now!</p>
        <p className="pad-log">Login / Join</p>
      </div>
    </section>
  );
}

function Header2() {
  return (
    <section className="flex">
      <div className="flex-blog">
        <h2>blogzine</h2>
        <h5>Home</h5>
        <h5>Pages</h5>
        <h5>Post</h5>
        <h5>Lifestyle</h5>
        <h5>Components</h5>
        <h5 className="background-sub">Subscribe!</h5>
      </div>
    </section>
  );
}
function Trending() {
  return (
    <section className="flex">
      <div className="background-2">
        <h5 className="background-trend">Trending:</h5>
      </div>
    </section>
  );
}

function Home1() {
  return (
    <section className="flex">
      <div class="flex-container">
        <div class="box-ls">
          <img
            src="https://previews.123rf.com/images/dizanna/dizanna1507/dizanna150700032/41820514-lifestyle-s%C5%82owo-chmura-fitness-sport-koncepcja-zdrowia.jpg?fj=1"
            class="image-ls"
            alt=""
          />
          <h5 class="lf-position">Lifestyle</h5>
          <h2 class="lf-position">Ten tale signs you to get a new startup</h2>
        </div>
        <div>
          <div class="box-tech">
            <img
              src="https://astronomy.osu.edu/sites/default/files/styles/news_and_events_image/public/2020-08/it-job-posting.jpg?h=9e499333&itok=v4CkS2Bv"
              class="image-tech"
              alt=""
            />
            <h5 class="tech-position">Technology</h5>
            <h3 class="tech-position">
              Best Pintrest boards for learning Busisness
            </h3>
          </div>
          <div class="flex2-container">
            <div class="box-bis">
              <img
                src="https://img.freepik.com/free-photo/business-partners-handshake-international-business-concept_53876-104046.jpg?size=626&ext=jpg"
                class="image-busis"
                alt=""
              />
              <h5 class="busis-position">Busisness</h5>
              <h3 class="busis-position">
                Five intermediate guide to Busisness
              </h3>
            </div>
            <div class="box-sp">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLQPYlAFR6CDU3G6bQ63DnzUMfH5qGAajEw&usqp=CAU"
                class="img-sports"
                alt=""
              />
              <h5 class="spt-position">Sports</h5>
              <h3 class="spt-position">15 reasons to choose startup</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-tth">
        <div class="tth">
          <h1>Today's Top Highlights</h1>
          <p>Latest breaking news,pictures,videos and special reports</p>
        </div>
        <div class="flex-container 3">
          <div class="Box-fans">
            <p>1.5K Fans</p>{" "}
          </div>
          <div class="Box-followers">
            <p>1.8M Followers</p>
          </div>
          <div class="Box-sub">
            <p>22K Sub</p>
          </div>
        </div>
      </div>
      <div class="flex-tt">
        <div>
          <div class="box-tech2">
            <img
              src="https://ieeecs-media.computer.org/wp-media/2021/11/05211850/AdobeStock_300300273.jpg"
              class="image-tech2"
              alt=""
            />
            <h5 class="tech2-position">Technology</h5>
          </div>
          <h3>Bad habits that people in the industry need to quit</h3>
          <p class="ad-fw">For who thoroughly her boy estimating conviction.</p>
          <p class="ad-rd">
            Removed demands expense account in outward tedious do.
          </p>
          <p class="ad-pw">Particular way thoroughly unaffected</p>
          <h5>by Billy Dec 29, 2021</h5>
        </div>
        <div>
          <div class="box-travel">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJyTuI7YI9r_LdSM3iDlnCFiivRUTW__AAw&usqp=CAU"
              class="image-travel"
              alt=""
            />
            <h5 class="travel-position">Travel</h5>
          </div>
          <h3 class="adjust-a">
            Around the web: 20 fabulous infographics about business
          </h3>
          <p class="width-pfm">
            Projection favorable Mrs can be projecting own.
          </p>
          <p class="width-tim">
            Thirty it matter enable become admire in giving.
          </p>
          <p class="width-srg">
            See resolved goodness felicity shy civility domestic had but.
          </p>
          <h5>by SamuelJan 22, 2021</h5>
        </div>
        <div class="pad-trendingtopics">
          <h2>Trending topics</h2>
          <h3 class="box-travel-2">Travel</h3>
          <h3 class="box-busisness-2">Business</h3>
          <h3 class="box-market">Marketing</h3>
          <h3 class="box-photo">Photography</h3>
          <h3 class="box-sports-2">Sports</h3>
        </div>
      </div>
      <div class="flex-container-4">
        <div>
          <div class="box-gad">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZusVYnVR0JUz67f4nLFFR20rujVbB0SD6A&usqp=CAU"
              class="image-gadjects"
              alt=""
            />
            <h5 class="gad-position">Gadjets</h5>
          </div>
          <h3>12 worst types of business accounts you follow on Twitter</h3>
          <p>He moonlights difficult engrossed it, sportsmen.</p>
          <p>Interested has all Devonshire difficulty gay assistance joy.</p>
          <p class="width-unaffected">
            Unaffected at ye of compliment alteration to
          </p>

          <h5>by Bryan Jun 17, 2021</h5>
        </div>
        <div>
          <div class="box-spt">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaS1PglsIYDd-9Ne_QScCg_O877p_r-DHELg&usqp=CAU"
              class="image-sports2"
              alt=""
            />
            <h5 class="sports2-position">Sports</h5>
          </div>
          <h3>Dirty little secrets about the business industry</h3>
          <p>
            Place voice no arises along to.
            <p>Parlors waiting so against me no.</p>
            <p>Wishing calling is warrant settled was lucky.</p>Express besides
            it present if at an opinion visitor.
          </p>

          <h5>by Denni Mar 07, 2021</h5>
        </div>
        <div class="adjust">
          <p>View all categories</p>
          <h2 class="mar-rp">Recent post</h2>
          <p class="mar-p1">The pros and cons of business agency May 17,2021</p>
          <p class="mar-p2">5 reasons why you shouldn't startup Apr 04,2021</p>
          <p class="mar-p3">
            Ten questions you should answer truthfully.Jun 30,2021
          </p>
          <p class="mar-p4">Five unbelievable facts about money.Nov 29,2021</p>
        </div>
      </div>
      <div class="flex-container-5">
        <div>
          <div class="box-marketing">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhsUgZATDipjVE8zuU2LscsxgwFeRH40ZLZw&usqp=CAU"
              class="image-mark2"
              alt=""
            />
            <h5 class="position-mark">Marketing</h5>
          </div>
          <h3 class="adj-width">
            7 common mistakes everyone makes while traveling
          </h3>
          <p class="adj-doy">
            Drawings offended yet answered Jennings perceive laughing six did
            far.
          </p>
          <p>Rooms oh fully taken by worse do.</p>
          <p>Points afraid but may end law lasted.</p>

          <h5>by Carolyn Sep 01, 2021</h5>
        </div>
        <div class="pad-box-pgy">
          <div class="box-pgy">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStXIdvtQEiV8CU_PfSFudGIa3EHt_XPFy3Q&usqp=CAU"
              class="image-photo"
              alt=""
            />
            <h5 class="position-photo">Photography</h5>
          </div>
          <h3>5 investment doubts you should clarify</h3>
          <p>Was out laughter raptures returned outweigh.</p>
          <p>Luckily cheered colonel I do we attack highest enabled.</p>
          <p>Tried law yet style child.</p>{" "}
          <p>The bore of true of no be deal.</p>
          <h5>by Jacqueline Nov 11, 2021</h5>
        </div>
        <div>
          <div class="box-ad">
            <h3>Advertisement</h3>
            <p>Place your ad here</p>
          </div>
        </div>
      </div>
      <h4 class="box-post">Load more post</h4>
    </section>
  );
}

function Division3() {
  return (
    <section className="flex">
      <div class="line"></div>
      <div class="flex-sn-cb">
        <h2>Sponsored news</h2>
        <p>Content by: Bootstrap</p>
      </div>
      <div class="flex-cont">
        <div>
          <div class="box-marketing-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDK-C8dDkGyCnRzjbU7Ti2_0rBC7lds3qyqw&usqp=CAU"
              class="image-market"
              alt=""
            />
            <h3 class="position-market">Marketing</h3>
          </div>
          <h4 class="dfg">7 common mistakes everyone makes while traveling</h4>
        </div>
        <div>
          <div class="box-photography-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0RL9pZiycTzMpLSUKwaIhsf-wrPgHZ5q4Mg&usqp=CAU"
              class="image-photo2"
              alt=""
            />
            <h3 class="position-photo2">Photography</h3>
          </div>
          <h4 class="lmn">5 investment doubts you should clarify</h4>
        </div>
        <div>
          <div class="box-sports-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLu4q7sluZOLiIZzUA4l7m4BewiU3tJAezPA&usqp=CAU"
              class="image-sports3"
              alt=""
            />
            <h3 class="position-sports2">Sports</h3>
          </div>
          <h4 class="lki">Dirty little secrets about the business industry</h4>
        </div>
        <div>
          <div class="box-gadgets-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbO1WlgYpK7k4AEJZQD-1hzxYPT2qGoWMwg&usqp=CAU"
              class="image-gad2"
              alt=""
            />
            <h3 class="position-gad2">Gadgets</h3>
          </div>
          <h4 class="hij">
            12 worst types of business accounts you follow on Twitter
          </h4>
        </div>
      </div>
      <div class="line-2"></div>
      <div class="flex-6">
        <h2>blogzine</h2>
        <div class="red-wid">
          <p>
            The next-generation blog, news, and magazine theme for you to start
            sharing your stories today!
          </p>
          <p>
            This Bootstrap 5 based theme is ideal for all types of sites that
            deliver the news.
          </p>
        </div>
        <p class="box-mailid">Enter your email address</p>
        <p class="box-sub2">Subscribe</p>
      </div>
    </section>
  );
}

function Division4() {
  return (
    <section>
      <div class="center">
        <div class="flex-words">
          <div class="mar-top">
            <h3>Recent post</h3>
            <h4 class="Box-bs1">Busisness</h4>
            <h4 class="sdf">Up-coming business bloggers, you need to watch</h4>
            <h4 class="Box-mt1">Marketing</h4>
            <h4 class="wer">
              How did we get here? The history of the business told through
              tweets
            </h4>
          </div>
          <div class="mar-nav">
            <h3>Navigation</h3>
            <div class="flex-words">
              <div class="margin-features">
                <h4>Features</h4>
                <h4>Style Guide</h4>
                <h4>Contact us</h4>
                <h4>Get Theme</h4>
                <h4>Support</h4>
                <h4>Privacy Policy</h4>
                <h4>Newsletter</h4>
              </div>
              <div class="width">
                <h4>News</h4>
                <h4>Career</h4>
                <h4>Technology</h4>
                <h4>Startups</h4>
                <h4>Gadgets</h4>
                <h4>Inspiration</h4>
              </div>
            </div>
          </div>
          <div class="margin-gru">
            <h3>Get Regular Updates</h3>
            <h4 class="margin-whapp">WhatsApp</h4>
            <h4>YouTube</h4>
            <h4>Website Notifications</h4>
            <h4>Newsletters</h4>
            <h4>Podcasts</h4>
          </div>
          <div class="margin-oma">
            <h3>Our mobile App</h3>
            <h4 class="width-pop">
              Download our App and get the latest Breaking News Alerts and
              latest headlines and daily articles near you.
            </h4>
          </div>
        </div>
        <h2 class="margin-ht">Hot topics</h2>
        <h4>
          Covid-19 Politics Entertainment Media Royalist World Half Full Scouted
          Travel Beast Inside Crossword Newsletters
        </h4>
        <h4>
          Podcasts Auction 2021 Protests NewsCyber Education Sports Tech And
          Auto Opinion Share Market
        </h4>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section>
      <div>
        <div class="line-4"></div>
        <div class="flex-webes">
          <h4 class="pad-wb">©2021 Webestica. All rights reserved</h4>
          <h4 class="pad-ee">English Edition</h4>
          <h4 class="pad-terms">Terms</h4>
          <h4 class="pad-privacy">Privacy</h4>
          <h4 class="pad-cookie">Cookie</h4>
        </div>
      </div>
    </section>
  );
}

ReactDom.render(<Webpage />, document.getElementById("root"));
