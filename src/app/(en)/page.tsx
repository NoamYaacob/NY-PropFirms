import { Ticker } from "@/design-system/Ticker";
import { CandleChart, LevelCompare } from "@/design-system/Charts";
import { Wrap } from "@/design-system/Blocks";
import { CopyPage, copyMeta } from "@/components/copy/CopyPage";
import { PathCard } from "@/components/home/PathCard";
import { DrawdownTool } from "@/components/tools/DrawdownTool";

export const metadata = copyMeta("home");

export default function HomePage() {
  return (
    <CopyPage
      name="home"
      introBefore={<Ticker />}
      titlePrefix={
        <>
          <p className="ds-eyebrow">For US futures traders</p>
          <p className="ds-wordmark ds-hero-wordmark mt-2" aria-hidden>
            <span className="ds-gold-text">NY</span>
            <span className="ds-silver-text">PROP FIRMS</span>
          </p>
        </>
      }
      introAside={<CandleChart id="home-chart" />}
      sections={{
        "Pick a path": {
          replace: (
            <Wrap>
              <h2 className="ds-h2">Pick a path</h2>
              <div className="mt-3">
                <PathCard />
              </div>
            </Wrap>
          ),
        },
        "The desk: drawdown distance": {
          replace: (
            <Wrap>
              <h2 className="ds-h2">The desk: drawdown distance</h2>
              <div className="mt-3">
                <DrawdownTool id="home-drawdown-distance" />
              </div>
            </Wrap>
          ),
        },
        "Two ways drawdown moves": { after: <div className="mt-3"><LevelCompare /></div> },
      }}
    />
  );
}
