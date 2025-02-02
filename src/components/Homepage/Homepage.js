"use client";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import EmblaCarousel from "../EmblaCarrousel";

const OPTIONS = {}
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export default function Homepage() {

  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
}
