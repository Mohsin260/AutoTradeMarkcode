import React from "react";
// import "../../../styles/inventory-cardview-atm_v=5.css";
import Link from "next/link";
import Image from "next/image";

const Filters = () => {
  return (
    <>
      <div className="flex w-full max-w-full flex-col">
        {/* <div className="mb-2 mt-2">
          <Link
            href="https://consumer.caroffer.com/#/consumer/get-offer/SQOI86"
            target="_blank"
          >
            <Image
              src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-1/sell-car-inventory-banner.png?time=1/17/2024 10:36:48 AM"
              alt="Sell car by car offer"
              width={343}
              height={42}
              className="Image-responsive center-block"
            />
          </Link>
        </div> */}
        {/*left-menu-filters*/}
        <div className="hidden-xs player-desktop">
          <div className="filter-div">
            <h2>FILTERS</h2>
            <span className="sort-list-drop">
              <Link href="/used-cars">Reset All Filters</Link>
            </span>
          </div>
          <div className="panel-head filter-options" role="banner">
            <div className="nav-tab" role="navigation">
              <ul className="nav__list">
                <li>
                  <input id="group-1" type="checkbox" hidden />
                  <label htmlFor="group-1" className="check">
                    
                    Make &amp; Model
                  </label>
                  <ul className="group-list">
                    <li>
                      <input id="sub-group-1" type="checkbox" hidden />
                      <label htmlFor="sub-group-1" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/acura.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                            alt=""
                          />
                        </span>
                        ACURA <small className="text-muted">(3)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={21} href="/used-cars/MakeID/21">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={472}
                            href="/used-cars/ModelID/472"
                            title="RDX (1)"
                            rel="nofollow"
                          >
                            RDX <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={1096}
                            href="/used-cars/ModelID/1096"
                            title="TLX (1)"
                            rel="nofollow"
                          >
                            TLX <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={892}
                            href="/used-cars/ModelID/892"
                            title="TSX SPORT WAGON (1)"
                            rel="nofollow"
                          >
                            TSX SPORT WAGON
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-2" type="checkbox" hidden />
                      <label htmlFor="sub-group-2" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/no-logo.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        ALFA ROMEO <small className="text-muted">(1)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={200} href="/used-cars/MakeID/200">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={1526}
                            href="/used-cars/ModelID/1526"
                            title="GIULIA (1)"
                            rel="nofollow"
                          >
                            GIULIA <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-3" type="checkbox" hidden />
                      <label htmlFor="sub-group-3" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/audi.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        AUDI <small className="text-muted">(11)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={37} href="/used-cars/MakeID/37">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={438}
                            href="/used-cars/ModelID/438"
                            title="A3 (2)"
                            rel="nofollow"
                          >
                            A3 <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={434}
                            href="/used-cars/ModelID/434"
                            title="A4 (2)"
                            rel="nofollow"
                          >
                            A4 <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={537}
                            href="/used-cars/ModelID/537"
                            title="A5 (1)"
                            rel="nofollow"
                          >
                            A5 <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={432}
                            href="/used-cars/ModelID/432"
                            title="A6 (2)"
                            rel="nofollow"
                          >
                            A6 <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={551}
                            href="/used-cars/ModelID/551"
                            title="Q5 (3)"
                            rel="nofollow"
                          >
                            Q5 <small className="text-muted">(3)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={437}
                            href="/used-cars/ModelID/437"
                            title="S8 (1)"
                            rel="nofollow"
                          >
                            S8 <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-4" type="checkbox" hidden />
                      <label htmlFor="sub-group-4" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/bmw.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        BMW <small className="text-muted">(15)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={23} href="/used-cars/MakeID/23">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={313}
                            href="/used-cars/ModelID/313"
                            title="3 SERIES (1)"
                            rel="nofollow"
                          >
                            3 SERIES <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={1298}
                            href="/used-cars/ModelID/1298"
                            title="3 SERIES GRAN TURISMO (1)"
                            rel="nofollow"
                          >
                            3 SERIES GRAN TURISMO
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={311}
                            href="/used-cars/ModelID/311"
                            title="5 SERIES (4)"
                            rel="nofollow"
                          >
                            5 SERIES <small className="text-muted">(4)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={978}
                            href="/used-cars/ModelID/978"
                            title="X1 (1)"
                            rel="nofollow"
                          >
                            X1 <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={306}
                            href="/used-cars/ModelID/306"
                            title="X3 (2)"
                            rel="nofollow"
                          >
                            X3 <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={314}
                            href="/used-cars/ModelID/314"
                            title="X5 (5)"
                            rel="nofollow"
                          >
                            X5 <small className="text-muted">(5)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={309}
                            href="/used-cars/ModelID/309"
                            title="X6 (1)"
                            rel="nofollow"
                          >
                            X6 <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-5" type="checkbox" hidden />
                      <label htmlFor="sub-group-5" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/buick.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        BUICK <small className="text-muted">(1)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={5} href="/used-cars/MakeID/5">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={608}
                            href="/used-cars/ModelID/608"
                            title="ENCLAVE (1)"
                            rel="nofollow"
                          >
                            ENCLAVE <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-6" type="checkbox" hidden />
                      <label htmlFor="sub-group-6" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/cadillac.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        CADILLAC <small className="text-muted">(4)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={13} href="/used-cars/MakeID/13">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={184}
                            href="/used-cars/ModelID/184"
                            title="ESCALADE (1)"
                            rel="nofollow"
                          >
                            ESCALADE <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={1372}
                            href="/used-cars/ModelID/1372"
                            title="XT5 (2)"
                            rel="nofollow"
                          >
                            XT5 <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={798}
                            href="/used-cars/ModelID/798"
                            title="XTS (1)"
                            rel="nofollow"
                          >
                            XTS <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-7" type="checkbox" hidden />
                      <label htmlFor="sub-group-7" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/chevrolet.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                            alt=""
                          />
                        </span>
                        CHEVROLET <small className="text-muted">(9)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={20} href="/used-cars/MakeID/20">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={455}
                            href="/used-cars/ModelID/455"
                            title="CRUZE (2)"
                            rel="nofollow"
                          >
                            CRUZE <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={260}
                            href="/used-cars/ModelID/260"
                            title="EXPRESS (1)"
                            rel="nofollow"
                          >
                            EXPRESS <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={690}
                            href="/used-cars/ModelID/690"
                            title="SONIC (1)"
                            rel="nofollow"
                          >
                            SONIC <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={256}
                            href="/used-cars/ModelID/256"
                            title="SUBURBAN (1)"
                            rel="nofollow"
                          >
                            SUBURBAN <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={255}
                            href="/used-cars/ModelID/255"
                            title="TAHOE (2)"
                            rel="nofollow"
                          >
                            TAHOE <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={289}
                            href="/used-cars/ModelID/289"
                            title="TRAVERSE (2)"
                            rel="nofollow"
                          >
                            TRAVERSE <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-8" type="checkbox" hidden />
                      <label htmlFor="sub-group-8" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/chrysler.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        CHRYSLER <small className="text-muted">(1)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={3} href="/used-cars/MakeID/3">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={22}
                            href="/used-cars/ModelID/22"
                            title="PACIFICA (1)"
                            rel="nofollow"
                          >
                            PACIFICA <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-9" type="checkbox" hidden />
                      <label htmlFor="sub-group-9" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/ford.png"
                            alt="Ford logo"
                            width={27} // set the width
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        FORD <small className="text-muted">(13)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={6} href="/used-cars/MakeID/6">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={81}
                            href="/used-cars/ModelID/81"
                            title="ECONOLINE (1)"
                            rel="nofollow"
                          >
                            ECONOLINE <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={72}
                            href="/used-cars/ModelID/72"
                            title="EXPEDITION (1)"
                            rel="nofollow"
                          >
                            EXPEDITION <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={80}
                            href="/used-cars/ModelID/80"
                            title="EXPLORER (1)"
                            rel="nofollow"
                          >
                            EXPLORER <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={625}
                            href="/used-cars/ModelID/625"
                            title="F-150 (1)"
                            rel="nofollow"
                          >
                            F-150 <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={89}
                            href="/used-cars/ModelID/89"
                            title="FIESTA (1)"
                            rel="nofollow"
                          >
                            FIESTA <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={66}
                            href="/used-cars/ModelID/66"
                            title="MUSTANG (1)"
                            rel="nofollow"
                          >
                            MUSTANG <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={940}
                            href="/used-cars/ModelID/940"
                            title="SUPER DUTY F-450 DRW (1)"
                            rel="nofollow"
                          >
                            SUPER DUTY F-450 DRW
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={865}
                            href="/used-cars/ModelID/865"
                            title="SUPER DUTY F-550 DRW (1)"
                            rel="nofollow"
                          >
                            SUPER DUTY F-550 DRW
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={470}
                            href="/used-cars/ModelID/470"
                            title="TRANSIT CONNECT (1)"
                            rel="nofollow"
                          >
                            TRANSIT CONNECT
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={3620}
                            href="/used-cars/ModelID/3620"
                            title="TRANSIT T-250 (1)"
                            rel="nofollow"
                          >
                            TRANSIT T-250
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={1391}
                            href="/used-cars/ModelID/1391"
                            title="TRANSIT T-350 (3)"
                            rel="nofollow"
                          >
                            TRANSIT T-350
                            <small className="text-muted">(3)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-10" type="checkbox" hidden />
                      <label htmlFor="sub-group-10" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/gmc.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        GMC <small className="text-muted">(3)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={10} href="/used-cars/MakeID/10">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={2458}
                            href="/used-cars/ModelID/2458"
                            title="SAVANA 2500 (1)"
                            rel="nofollow"
                          >
                            SAVANA 2500
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={880}
                            href="/used-cars/ModelID/880"
                            title="SIERRA 1500 (1)"
                            rel="nofollow"
                          >
                            SIERRA 1500
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={821}
                            href="/used-cars/ModelID/821"
                            title="YUKON XL DENALI (1)"
                            rel="nofollow"
                          >
                            YUKON XL DENALI
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-11" type="checkbox" hidden />
                      <label htmlFor="sub-group-11" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/honda.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        HONDA <small className="text-muted">(15)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={18} href="/used-cars/MakeID/18">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={235}
                            href="/used-cars/ModelID/235"
                            title="ACCORD (4)"
                            rel="nofollow"
                          >
                            ACCORD <small className="text-muted">(4)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={848}
                            href="/used-cars/ModelID/848"
                            title="ACCORD HYBRID (1)"
                            rel="nofollow"
                          >
                            ACCORD HYBRID
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={234}
                            href="/used-cars/ModelID/234"
                            title="CIVIC (3)"
                            rel="nofollow"
                          >
                            CIVIC <small className="text-muted">(3)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={812}
                            href="/used-cars/ModelID/812"
                            title="CIVIC HYBRID (1)"
                            rel="nofollow"
                          >
                            CIVIC HYBRID
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={238}
                            href="/used-cars/ModelID/238"
                            title="CR-V (1)"
                            rel="nofollow"
                          >
                            CR-V <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={463}
                            href="/used-cars/ModelID/463"
                            title="INSIGHT (1)"
                            rel="nofollow"
                          >
                            INSIGHT <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={236}
                            href="/used-cars/ModelID/236"
                            title="ODYSSEY (3)"
                            rel="nofollow"
                          >
                            ODYSSEY <small className="text-muted">(3)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={237}
                            href="/used-cars/ModelID/237"
                            title="PILOT (1)"
                            rel="nofollow"
                          >
                            PILOT <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-12" type="checkbox" hidden />
                      <label htmlFor="sub-group-12" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/hyundai.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        HYUNDAI <small className="text-muted">(3)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={2} href="/used-cars/MakeID/2">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={10}
                            href="/used-cars/ModelID/10"
                            title="ELANTRA (1)"
                            rel="nofollow"
                          >
                            ELANTRA <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={793}
                            href="/used-cars/ModelID/793"
                            title="EQUUS (1)"
                            rel="nofollow"
                          >
                            EQUUS <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={9}
                            href="/used-cars/ModelID/9"
                            title="SANTA FE (1)"
                            rel="nofollow"
                          >
                            SANTA FE <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-13" type="checkbox" hidden />
                      <label htmlFor="sub-group-13" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/jeep.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        JEEP <small className="text-muted">(5)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={15} href="/used-cars/MakeID/15">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={214}
                            href="/used-cars/ModelID/214"
                            title="GRAND CHEROKEE (3)"
                            rel="nofollow"
                          >
                            GRAND CHEROKEE
                            <small className="text-muted">(3)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={209}
                            href="/used-cars/ModelID/209"
                            title="WRANGLER UNLIMITED (2)"
                            rel="nofollow"
                          >
                            WRANGLER UNLIMITED
                            <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-14" type="checkbox" hidden />
                      <label htmlFor="sub-group-14" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/land_rover.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        LAND ROVER <small className="text-muted">(3)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={22} href="/used-cars/MakeID/22">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={300}
                            href="/used-cars/ModelID/300"
                            title="DISCOVERY (1)"
                            rel="nofollow"
                          >
                            DISCOVERY <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={1400}
                            href="/used-cars/ModelID/1400"
                            title="DISCOVERY SPORT (1)"
                            rel="nofollow"
                          >
                            DISCOVERY SPORT
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={298}
                            href="/used-cars/ModelID/298"
                            title="RANGE ROVER (1)"
                            rel="nofollow"
                          >
                            RANGE ROVER
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-15" type="checkbox" hidden />
                      <label htmlFor="sub-group-15" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/lexus.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        LEXUS <small className="text-muted">(3)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={8} href="/used-cars/MakeID/8">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={466}
                            href="/used-cars/ModelID/466"
                            title="GX 460 (1)"
                            rel="nofollow"
                          >
                            GX 460 <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={100}
                            href="/used-cars/ModelID/100"
                            title="RX 300 (1)"
                            rel="nofollow"
                          >
                            RX 300 <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={762}
                            href="/used-cars/ModelID/762"
                            title="RX 450H (1)"
                            rel="nofollow"
                          >
                            RX 450H <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-16" type="checkbox" hidden />
                      <label htmlFor="sub-group-16" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/mazda.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        MAZDA <small className="text-muted">(2)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={14} href="/used-cars/MakeID/14">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={792}
                            href="/used-cars/ModelID/792"
                            title="CX-5 (1)"
                            rel="nofollow"
                          >
                            CX-5 <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={461}
                            href="/used-cars/ModelID/461"
                            title="MAZDA3 (1)"
                            rel="nofollow"
                          >
                            MAZDA3 <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-17" type="checkbox" hidden />
                      <label htmlFor="sub-group-17" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/mercedes-benz.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        MERCEDES-BENZ <small className="text-muted">(22)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={12} href="/used-cars/MakeID/12">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={167}
                            href="/used-cars/ModelID/167"
                            title="C-CLASS (3)"
                            rel="nofollow"
                          >
                            C-CLASS <small className="text-muted">(3)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={164}
                            href="/used-cars/ModelID/164"
                            title="CL-CLASS (1)"
                            rel="nofollow"
                          >
                            CL-CLASS <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={177}
                            href="/used-cars/ModelID/177"
                            title="E-CLASS (4)"
                            rel="nofollow"
                          >
                            E-CLASS <small className="text-muted">(4)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={1256}
                            href="/used-cars/ModelID/1256"
                            title="GLC (1)"
                            rel="nofollow"
                          >
                            GLC <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={1245}
                            href="/used-cars/ModelID/1245"
                            title="GLE (2)"
                            rel="nofollow"
                          >
                            GLE <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={169}
                            href="/used-cars/ModelID/169"
                            title="GLK-CLASS (1)"
                            rel="nofollow"
                          >
                            GLK-CLASS <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={1371}
                            href="/used-cars/ModelID/1371"
                            title="GLS (1)"
                            rel="nofollow"
                          >
                            GLS <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={166}
                            href="/used-cars/ModelID/166"
                            title="M-CLASS (5)"
                            rel="nofollow"
                          >
                            M-CLASS <small className="text-muted">(5)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={173}
                            href="/used-cars/ModelID/173"
                            title="S-CLASS (1)"
                            rel="nofollow"
                          >
                            S-CLASS <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={170}
                            href="/used-cars/ModelID/170"
                            title="SL-CLASS (1)"
                            rel="nofollow"
                          >
                            SL-CLASS <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={691}
                            href="/used-cars/ModelID/691"
                            title="SPRINTER 2500 (1)"
                            rel="nofollow"
                          >
                            SPRINTER 2500
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={3633}
                            href="/used-cars/ModelID/3633"
                            title="SPRINTER CARGO 3500 (1)"
                            rel="nofollow"
                          >
                            SPRINTER CARGO 3500
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-18" type="checkbox" hidden />
                      <label htmlFor="sub-group-18" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/mini.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        MINI <small className="text-muted">(2)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={35} href="/used-cars/MakeID/35">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={815}
                            href="/used-cars/ModelID/815"
                            title="COOPER HARDTOP (1)"
                            rel="nofollow"
                          >
                            COOPER HARDTOP
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={1404}
                            href="/used-cars/ModelID/1404"
                            title="COUNTRYMAN (1)"
                            rel="nofollow"
                          >
                            COUNTRYMAN <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-19" type="checkbox" hidden />
                      <label htmlFor="sub-group-19" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/nissan.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        NISSAN <small className="text-muted">(8)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={16} href="/used-cars/MakeID/16">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={223}
                            href="/used-cars/ModelID/223"
                            title="ALTIMA (1)"
                            rel="nofollow"
                          >
                            ALTIMA <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={217}
                            href="/used-cars/ModelID/217"
                            title="ARMADA (1)"
                            rel="nofollow"
                          >
                            ARMADA <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={216}
                            href="/used-cars/ModelID/216"
                            title="FRONTIER (1)"
                            rel="nofollow"
                          >
                            FRONTIER <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={225}
                            href="/used-cars/ModelID/225"
                            title="MURANO (2)"
                            rel="nofollow"
                          >
                            MURANO <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={456}
                            href="/used-cars/ModelID/456"
                            title="ROGUE (3)"
                            rel="nofollow"
                          >
                            ROGUE <small className="text-muted">(3)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-20" type="checkbox" hidden />
                      <label htmlFor="sub-group-20" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/porsche.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        PORSCHE <small className="text-muted">(2)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={38} href="/used-cars/MakeID/38">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={441}
                            href="/used-cars/ModelID/441"
                            title="CAYENNE (1)"
                            rel="nofollow"
                          >
                            CAYENNE <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={650}
                            href="/used-cars/ModelID/650"
                            title="PANAMERA (1)"
                            rel="nofollow"
                          >
                            PANAMERA <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-21" type="checkbox" hidden />
                      <label htmlFor="sub-group-21" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/ram.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        RAM <small className="text-muted">(5)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={43} href="/used-cars/MakeID/43">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={465}
                            href="/used-cars/ModelID/465"
                            title="1500 (2)"
                            rel="nofollow"
                          >
                            1500 <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={760}
                            href="/used-cars/ModelID/760"
                            title="2500 (2)"
                            rel="nofollow"
                          >
                            2500 <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={1367}
                            href="/used-cars/ModelID/1367"
                            title="PROMASTER (1)"
                            rel="nofollow"
                          >
                            PROMASTER <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-22" type="checkbox" hidden />
                      <label htmlFor="sub-group-22" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/subaru.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        SUBARU <small className="text-muted">(3)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={1} href="/used-cars/MakeID/1">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={3}
                            href="/used-cars/ModelID/3"
                            title="IMPREZA (1)"
                            rel="nofollow"
                          >
                            IMPREZA <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={817}
                            href="/used-cars/ModelID/817"
                            title="IMPREZA SEDAN (1)"
                            rel="nofollow"
                          >
                            IMPREZA SEDAN
                            <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={4}
                            href="/used-cars/ModelID/4"
                            title="OUTBACK (1)"
                            rel="nofollow"
                          >
                            OUTBACK <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-23" type="checkbox" hidden />
                      <label htmlFor="sub-group-23" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/toyota.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        TOYOTA <small className="text-muted">(20)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={9} href="/used-cars/MakeID/9">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={123}
                            href="/used-cars/ModelID/123"
                            title="4RUNNER (2)"
                            rel="nofollow"
                          >
                            4RUNNER <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={124}
                            href="/used-cars/ModelID/124"
                            title="CAMRY (6)"
                            rel="nofollow"
                          >
                            CAMRY <small className="text-muted">(6)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={129}
                            href="/used-cars/ModelID/129"
                            title="COROLLA (2)"
                            rel="nofollow"
                          >
                            COROLLA <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={122}
                            href="/used-cars/ModelID/122"
                            title="PRIUS (2)"
                            rel="nofollow"
                          >
                            PRIUS <small className="text-muted">(2)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={130}
                            href="/used-cars/ModelID/130"
                            title="RAV4 (1)"
                            rel="nofollow"
                          >
                            RAV4 <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={132}
                            href="/used-cars/ModelID/132"
                            title="SIENNA (1)"
                            rel="nofollow"
                          >
                            SIENNA <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={134}
                            href="/used-cars/ModelID/134"
                            title="TACOMA (3)"
                            rel="nofollow"
                          >
                            TACOMA <small className="text-muted">(3)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={127}
                            href="/used-cars/ModelID/127"
                            title="TUNDRA (3)"
                            rel="nofollow"
                          >
                            TUNDRA <small className="text-muted">(3)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-24" type="checkbox" hidden />
                      <label htmlFor="sub-group-24" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/volkswagen.png"
                            width={27}
                            height={27}
                            alt="VOLKSWAGEN"
                            className="Image-responsive"
                          />
                        </span>
                        VOLKSWAGEN <small className="text-muted">(6)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={24} href="/used-cars/MakeID/24">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={1592}
                            href="/used-cars/ModelID/1592"
                            title="ATLAS (1)"
                            rel="nofollow"
                          >
                            ATLAS <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={315}
                            href="/used-cars/ModelID/315"
                            title="GOLF (1)"
                            rel="nofollow"
                          >
                            GOLF <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={316}
                            href="/used-cars/ModelID/316"
                            title="JETTA (3)"
                            rel="nofollow"
                          >
                            JETTA <small className="text-muted">(3)</small>
                          </Link>
                          <i className />
                        </li>
                        <li className="single-model">
                          <Link
                            id={318}
                            href="/used-cars/ModelID/318"
                            title="TOUAREG (1)"
                            rel="nofollow"
                          >
                            TOUAREG <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input id="sub-group-25" type="checkbox" hidden />
                      <label htmlFor="sub-group-25" className="check">
                        <span className="model-pic">
                          <Image
                            src="https://www.autotrademark.com/Content/images/samplesite-images/inventory-2/volvo.png"
                            width={27}
                            height={27}
                            className="Image-responsive"
                          />
                        </span>
                        VOLVO <small className="text-muted">(1)</small>
                      </label>
                      <ul className="sub-group-list all-model-list">
                        <li className="all-models">
                          <Link id={27} href="/used-cars/MakeID/27">
                            Select All
                          </Link>
                        </li>
                        <li className="single-model">
                          <Link
                            id={723}
                            href="/used-cars/ModelID/723"
                            title="XC60 (1)"
                            rel="nofollow"
                          >
                            XC60 <small className="text-muted">(1)</small>
                          </Link>
                          <i className />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <input id="group-3" type="checkbox" hidden />
                  <label htmlFor="group-3" className="check">
                    
                    Body Type
                  </label>
                  <ul className="sub-group-list body-list">
                    <li>
                      <Link
                        id={53}
                        href="/used-cars/BodyStyleID/53"
                        title="CARGO VAN (8)"
                        rel="nofollow"
                      >
                        CARGO VAN <small className="text-muted">(8)</small>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={35}
                        href="/used-cars/BodyStyleID/35"
                        title="CONVERTIBLE (3)"
                        rel="nofollow"
                      >
                        CONVERTIBLE <small className="text-muted">(3)</small>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={7}
                        href="/used-cars/BodyStyleID/7"
                        title="COUPE (2)"
                        rel="nofollow"
                      >
                        COUPE <small className="text-muted">(2)</small>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={125}
                        href="/used-cars/BodyStyleID/125"
                        title="CREW CHASSIS (1)"
                        rel="nofollow"
                      >
                        CREW CHASSIS <small className="text-muted">(1)</small>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={102}
                        href="/used-cars/BodyStyleID/102"
                        title="HATCHBACK 2 DR. (1)"
                        rel="nofollow"
                      >
                        HATCHBACK 2 DR.
                        <small className="text-muted">(1)</small>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={101}
                        href="/used-cars/BodyStyleID/101"
                        title="HATCHBACK 4 DR. (7)"
                        rel="nofollow"
                      >
                        HATCHBACK 4 DR.
                        <small className="text-muted">(7)</small>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={370}
                        href="/used-cars/BodyStyleID/370"
                        title="MINI VAN (1)"
                        rel="nofollow"
                      >
                        MINI VAN <small className="text-muted">(1)</small>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={1}
                        href="/used-cars/BodyStyleID/1"
                        title="SEDAN (50)"
                        rel="nofollow"
                      >
                        SEDAN <small className="text-muted">(50)</small>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={130}
                        href="/used-cars/BodyStyleID/130"
                        title="STATION WAGON (1)"
                        rel="nofollow"
                      >
                        STATION WAGON <small className="text-muted">(1)</small>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={12}
                        href="/used-cars/BodyStyleID/12"
                        title="SUV (62)"
                        rel="nofollow"
                      >
                        SUV <small className="text-muted">(62)</small>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={4}
                        href="/used-cars/BodyStyleID/4"
                        title="TRUCK (14)"
                        rel="nofollow"
                      >
                        TRUCK <small className="text-muted">(14)</small>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={37}
                        href="/used-cars/BodyStyleID/37"
                        title="UTILITY (1)"
                        rel="nofollow"
                      >
                        UTILITY <small className="text-muted">(1)</small>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={5}
                        href="/used-cars/BodyStyleID/5"
                        title="VAN (7)"
                        rel="nofollow"
                      >
                        VAN <small className="text-muted">(7)</small>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={2}
                        href="/used-cars/BodyStyleID/2"
                        title="WAGON (3)"
                        rel="nofollow"
                      >
                        WAGON <small className="text-muted">(3)</small>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <input id="group-4" type="checkbox" hidden />
                  <label htmlFor="group-4" className="check">
                    
                    Years
                  </label>
                  <ul className="group-list year-list">
                    <li>
                      <div className="filters">
                        <div className="textinputs ">
                          <span>Years</span>
                          <input
                            id="year-min"
                            type="text"
                            defaultValue={2000}
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                          <input
                            id="year-max"
                            type="text"
                            defaultValue={2024}
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                          <div className="clearfix" />
                          <div className="margin-top-20">
                            <input
                              id="year-filter"
                              type="button"
                              defaultValue="Filter Years"
                              className="fltr-price"
                              style={{
                                background: "#1c1d1d",
                                color: "#fff",
                                borderRadius: 3,
                                padding: 7,
                                width: "100%",
                                fontSize: 14,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <input id="group-5" type="checkbox" hidden />
                  <label htmlFor="group-5" className="check">
                    Mileage
                  </label>
                  <ul className="group-list">
                    <li>
                      <div className="filters">
                        <div className="textinputs ">
                          <span>Mileage</span>
                          <input
                            id="mileage-min"
                            type="text"
                            defaultValue={1000}
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                          <input
                            id="mileage-max"
                            type="text"
                            defaultValue={100000}
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                          <div className="clearfix" />
                          <div className="margin-top-20">
                            <input
                              id="mileage-filter"
                              type="button"
                              defaultValue="Filter Mileage"
                              className="fltr-price"
                              style={{
                                background: "#1c1d1d",
                                color: "#fff",
                                borderRadius: 3,
                                padding: 7,
                                width: "100%",
                                fontSize: 14,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <input id="group-6" type="checkbox" hidden />
                  <label htmlFor="group-6" className="check">
                    
                    Price
                  </label>
                  <ul className="group-list">
                    <li>
                      <div className="filters">
                        <div className="textinputs ">
                          <span>Price</span>
                          <input
                            id="price-min"
                            type="text"
                            defaultValue={1}
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                          <input
                            id="price-max"
                            type="text"
                            defaultValue={500000}
                            spellCheck="false"
                            data-ms-editor="true"
                          />
                          <div className="clearfix" />
                          <div className="margin-top-20">
                            <input
                              id="price-filter"
                              type="button"
                              defaultValue="Filter Price"
                              className="fltr-price"
                              style={{
                                background: "#1c1d1d",
                                color: "#fff",
                                borderRadius: 3,
                                padding: 7,
                                width: "100%",
                                fontSize: 14,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <input id="group-8" type="checkbox" hidden />
                  <label htmlFor="group-8" className="check">
                    
                    Color
                  </label>
                  <ul className="sub-group-list color-list">
                    <li>
                      <Link
                        id={114}
                        href="/used-cars/ColorID/114"
                        title="Beige (1)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle color-beige" />
                          Beige <small className="text-muted">(1)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={159}
                        href="/used-cars/ColorID/159"
                        title="Black (28)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-circle" />
                          Black <small className="text-muted">(28)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={116}
                        href="/used-cars/ColorID/116"
                        title="Blue (11)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-Blue" />
                          Blue <small className="text-muted">(11)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={7495}
                        href="/used-cars/ColorID/7495"
                        title="Blueprint (1)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-Other" />
                          Blueprint <small className="text-muted">(1)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={117}
                        href="/used-cars/ColorID/117"
                        title="Brown (3)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-Brown" />
                          Brown <small className="text-muted">(3)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={7846}
                        href="/used-cars/ColorID/7846"
                        title="Carbonized Gray Metallic (1)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-Other" />
                          Carbonized Gray Metallic
                          <small className="text-muted">(1)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={7045}
                        href="/used-cars/ColorID/7045"
                        title="Crimson Red Tintcoat (1)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-Other" />
                          Crimson Red Tintcoat
                          <small className="text-muted">(1)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={195}
                        href="/used-cars/ColorID/195"
                        title="Crystal Black Pearl (1)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-Other" />
                          Crystal Black Pearl
                          <small className="text-muted">(1)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={4990}
                        href="/used-cars/ColorID/4990"
                        title="Dark Graphite Metallic (1)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-Other" />
                          Dark Graphite Metallic
                          <small className="text-muted">(1)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={4443}
                        href="/used-cars/ColorID/4443"
                        title="Diamond White Metallic (1)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-Other" />
                          Diamond White Metallic
                          <small className="text-muted">(1)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={119}
                        href="/used-cars/ColorID/119"
                        title="Gold (2)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-Gold" />
                          Gold <small className="text-muted">(2)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={4679}
                        href="/used-cars/ColorID/4679"
                        title="Graphite Gray Metallic (1)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-Other" />
                          Graphite Gray Metallic
                          <small className="text-muted">(1)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={120}
                        href="/used-cars/ColorID/120"
                        title="Gray (17)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-Gray" />
                          Gray <small className="text-muted">(17)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={121}
                        href="/used-cars/ColorID/121"
                        title="Green (1)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-Green" />
                          Green <small className="text-muted">(1)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={9512}
                        href="/used-cars/ColorID/9512"
                        title="Grey (1)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-Other" />
                          Grey <small className="text-muted">(1)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={124}
                        href="/used-cars/ColorID/124"
                        title="Red (15)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-Red" />
                          Red <small className="text-muted">(15)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={125}
                        href="/used-cars/ColorID/125"
                        title="Silver (21)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-Sliver" />
                          Silver <small className="text-muted">(21)</small>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id={126}
                        href="/used-cars/ColorID/126"
                        title="White (53)"
                        rel="nofollow"
                      >
                        <div>
                          <span className="color-circle black-White" />
                          White <small className="text-muted">(53)</small>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <input id="group-9" type="checkbox" hidden />
                  <label htmlFor="group-9" className="check">
                    
                    Transmission &amp; Fuel Economy
                  </label>
                  <ul className="sub-group-list">
                    <h3 className="engine-info-heading">Transmission</h3>
                    <li className="transmission">
                      
                      <Link id="Manual" href="#" className="engine-info">
                        Manual
                      </Link>
                    </li>
                    <li className="transmission">
                      
                      <Link id="Automatic" href="#" className="engine-info">
                        Automatic
                      </Link>
                    </li>
                    <h3 className="engine-info-heading">Fuel Economy</h3>
                    <li className="fuel-economy">
                      
                      <Link id={20} href="#" className="engine-info">
                        10-20 MPG
                      </Link>
                    </li>
                    <li className="fuel-economy">
                      
                      <Link id={30} href="#" className="engine-info">
                        20-30 MPG
                      </Link>
                    </li>
                    <li className="fuel-economy">
                      
                      <Link id={40} href="#" className="engine-info">
                        30-40 MPG
                      </Link>
                    </li>
                    <li className="fuel-economy">
                      
                      <Link id={50} href="#" className="engine-info">
                        40-50 MPG
                      </Link>
                    </li>
                    <li className="fuel-economy">
                      
                      <Link id={60} href="#" className="engine-info">
                        50-60 MPG
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <form
            className="clearfix select-form p-2 hidden"
            action="/used-cars"
            method="get"
          >
            <div className="my-dropdown min-years-dropdown max-dropdown hide">
              <select
                name="BodyStyleID"
                id="BodyStyleID"
                className="css-dropdowns"
                tabIndex={1}
              >
                <option value="Search by Body Style">
                  Search by Body Style
                </option>
                <option value={53}>CARGO VAN</option>
                <option value={35}>CONVERTIBLE</option>
                <option value={7}>COUPE</option>
                <option value={125}>CREW CHASSIS</option>
                <option value={102}>HATCHBACK 2 DR.</option>
                <option value={101}>HATCHBACK 4 DR.</option>
                <option value={370}>MINI VAN</option>
                <option value={1}>SEDAN</option>
                <option value={130}>STATION WAGON</option>
                <option value={12}>SUV</option>
                <option value={4}>TRUCK</option>
                <option value={37}>UTILITY</option>
                <option value={5}>VAN</option>
                <option value={2}>WAGON</option>
              </select>
            </div>
            <div
              className="my-dropdown min-years-dropdown max-dropdown hide"
              style={{ display: "none" }}
            >
              <select
                name="New"
                id="New"
                className="css-dropdowns"
                tabIndex={1}
              >
                <option value="Search by Condition">Search by Condition</option>
                <option value="False">Used</option>
                <option value="True">New</option>
              </select>
            </div>
            <div className="my-dropdown min-years-dropdown max-dropdown hide">
              <select
                name="ColorID"
                id="ColorID"
                className="css-dropdowns"
                tabIndex={1}
              >
                <option value="Search by Color">Search by Color</option>
                <option value={114}>Beige</option>
                <option value={159}>Black</option>
                <option value={116}>Blue</option>
                <option value={7495}>Blueprint</option>
                <option value={117}>Brown</option>
                <option value={7846}>Carbonized Gray Metallic</option>
                <option value={7045}>Crimson Red Tintcoat</option>
                <option value={195}>Crystal Black Pearl</option>
                <option value={4990}>Dark Graphite Metallic</option>
                <option value={4443}>Diamond White Metallic</option>
                <option value={119}>Gold</option>
                <option value={4679}>Graphite Gray Metallic</option>
                <option value={120}>Gray</option>
                <option value={121}>Green</option>
                <option value={9512}>Grey</option>
                <option value={124}>Red</option>
                <option value={125}>Silver</option>
                <option value={126}>White</option>
              </select>
            </div>
            <input type="hidden" name="Page" id="Page" defaultValue={1} />
            <input
              type="hidden"
              name="Preview"
              id="Preview"
              defaultValue="inventory-wide-sidebar-left"
            />
            <input type="hidden" name="Size" id="Size" defaultValue={10} />
            <input type="hidden" name="SortBy" id="SortBy" defaultValue={1} />
            <input
              type="hidden"
              name="VehicleLocationID"
              id="VehicleLocationID"
            />
            <input type="hidden" name="MinYear" id="MinYear" />
            <input type="hidden" name="MaxYear" id="MaxYear" />
            <input type="hidden" name="PriceFrom" id="PriceFrom" />
            <input type="hidden" name="PriceTo" id="PriceTo" />
            <input type="hidden" name="MilesFrom" id="MilesFrom" />
            <input type="hidden" name="MilesTo" id="MilesTo" />
            <input type="hidden" name="Transmission" id="Transmission" />
            <input type="hidden" name="mpgTo" id="mpgTo" />
            <input type="hidden" id="MakeID" name="MakeID" />
            <input type="hidden" id="ModelID" name="ModelID" />
          </form>
          {/* The Gallery as lightbox dialog, should be a child element of the document body */}
          <div id="blueimp-gallery" className="blueimp-gallery hidden">
            <div className="slides" />
            <h3 className="title" />
            <Link href="#" className="prev">
              ‹
            </Link>
            <Link href="#" className="next">
              ›
            </Link>
            <Link href="#" className="close">
              ×
            </Link>
            <Link href="" className="play-pause"  />
            <ol className="indicator" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
