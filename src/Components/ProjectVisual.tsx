import type { VisualKind } from "../content/types";

type Props = { kind: VisualKind; label: string; image?: string };

export function ProjectVisual({ kind, label, image }: Props) {
  if (image)
    return (
      <figure className="project-visual image-cover">
        <img src={image} alt={`${label} project interface`} loading="lazy" />
      </figure>
    );
  if (kind === "signal")
    return (
      <svg
        className="project-visual system-visual"
        viewBox="0 0 760 440"
        role="img"
        aria-labelledby="signal-title signal-desc"
      >
        <title id="signal-title">Sentiment Terminal system flow</title>
        <desc id="signal-desc">
          Market price and news inputs pass through technical indicators and
          sentiment analysis, then combine into direction and confidence
          outputs.
        </desc>
        <g className="system-guide">
          <path d="M40 220H720" />
          <path d="M212 70V370M505 70V370" />
        </g>
        <g className="system-node input">
          <rect x="45" y="82" width="150" height="82" />
          <text x="60" y="110">
            MARKET PRICE
          </text>
          <text className="detail" x="60" y="138">
            time series input
          </text>
        </g>
        <g className="system-node input">
          <rect x="45" y="276" width="150" height="82" />
          <text x="60" y="304">
            FINANCIAL NEWS
          </text>
          <text className="detail" x="60" y="332">
            text input
          </text>
        </g>
        <g className="system-node">
          <rect x="250" y="82" width="215" height="82" />
          <text x="267" y="110">
            TECHNICAL INDICATORS
          </text>
          <text className="detail" x="267" y="138">
            RSI / MACD / volatility
          </text>
        </g>
        <g className="system-node">
          <rect x="250" y="276" width="215" height="82" />
          <text x="267" y="304">
            SENTIMENT ANALYSIS
          </text>
          <text className="detail" x="267" y="332">
            strength / polarity
          </text>
        </g>
        <g className="system-node output">
          <rect x="545" y="155" width="170" height="130" />
          <text x="562" y="184">
            COMPOSITE SIGNAL
          </text>
          <path d="M563 215h130M563 248h130" />
          <text className="detail" x="563" y="207">
            direction
          </text>
          <text className="detail" x="563" y="240">
            confidence
          </text>
          <text className="detail" x="563" y="273">
            agreement
          </text>
        </g>
        <g className="system-arrow">
          <path d="M195 123h55M195 317h55M465 123l80 72M465 317l80-72" />
        </g>
      </svg>
    );
  if (kind === "graph")
    return (
      <svg
        className="project-visual system-visual"
        viewBox="0 0 760 440"
        role="img"
        aria-labelledby="army-title army-desc"
      >
        <title id="army-title">MESBG army-list data structure</title>
        <desc id="army-desc">
          An army contains warbands led by heroes, each connected to units and
          contributing to a total points allocation.
        </desc>
        <g className="roster-root">
          <rect x="270" y="30" width="220" height="70" />
          <text x="290" y="59">
            ARMY LIST
          </text>
          <text className="detail" x="290" y="83">
            Σ points / roster state
          </text>
        </g>
        <g className="roster-lines">
          <path d="M380 100v45M175 145h410M175 145v40M585 145v40M175 255v40M585 255v40" />
        </g>
        <g className="system-node">
          <rect x="65" y="185" width="220" height="70" />
          <text x="82" y="214">
            WARBAND 01
          </text>
          <text className="detail" x="82" y="238">
            hero / allocated points
          </text>
          <rect x="65" y="295" width="95" height="70" />
          <text x="82" y="324">
            UNIT
          </text>
          <text className="detail" x="82" y="348">
            qty × pts
          </text>
          <rect x="190" y="295" width="95" height="70" />
          <text x="207" y="324">
            UNIT
          </text>
          <text className="detail" x="207" y="348">
            qty × pts
          </text>
        </g>
        <g className="system-node">
          <rect x="475" y="185" width="220" height="70" />
          <text x="492" y="214">
            WARBAND 02
          </text>
          <text className="detail" x="492" y="238">
            hero / allocated points
          </text>
          <rect x="475" y="295" width="95" height="70" />
          <text x="492" y="324">
            UNIT
          </text>
          <text className="detail" x="492" y="348">
            qty × pts
          </text>
          <rect x="600" y="295" width="95" height="70" />
          <text x="617" y="324">
            UNIT
          </text>
          <text className="detail" x="617" y="348">
            qty × pts
          </text>
        </g>
      </svg>
    );
  if (kind === "pose")
    return (
      <svg
        className="project-visual system-visual"
        viewBox="0 0 760 440"
        role="img"
        aria-labelledby="pose-title pose-desc"
      >
        <title id="pose-title">Exercise correction analysis stages</title>
        <desc id="pose-desc">
          A pose is captured, normalized, compared as a movement sequence, and
          translated into feedback.
        </desc>
        <g className="pose-labels">
          <text x="65" y="55">
            01 / CAPTURE
          </text>
          <text x="250" y="55">
            02 / NORMALIZE
          </text>
          <text x="435" y="55">
            03 / COMPARE
          </text>
          <text x="620" y="55">
            04 / FEEDBACK
          </text>
        </g>
        <g className="poses">
          {[105, 290, 475].map((x, i) => (
            <g key={x} opacity={0.55 + i * 0.2}>
              <circle cx={x} cy="120" r="18" />
              <path
                d={`M${x} 138v88m0-55l-42 46m42-46l45 34m-45 21l-35 91m35-91l45 88`}
              />
              <circle cx={x} cy="226" r="6" />
            </g>
          ))}
        </g>
        <g className="feedback-mark">
          <circle cx="660" cy="220" r="62" />
          <path d="m628 220 22 22 43-49" />
        </g>
        <g className="system-arrow">
          <path d="M160 220h55M345 220h55M530 220h55" />
        </g>
        <path
          className="signal"
          d="M45 380c90-5 112-35 172-20s85-70 150-30 110 5 205-35 90 15 145-10"
        />
      </svg>
    );
  if (kind === "network")
    return (
      <svg
        className="project-visual"
        viewBox="0 0 640 380"
        role="img"
        aria-label={`${label}: peer-to-peer network diagram`}
      >
        <g className="network-links">
          <path d="M92 190L230 80 410 110 548 190 430 300 210 290 92 190M230 80l-20 210m200-180 20 190M92 190l318-80M230 80l318 110M210 290l338-100M210 290l220 10" />
        </g>
        {[
          [92, 190],
          [230, 80],
          [410, 110],
          [548, 190],
          [430, 300],
          [210, 290],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="24" />
            <text x={x} y={y + 5}>
              N{i + 1}
            </text>
          </g>
        ))}
      </svg>
    );
  return (
    <div
      className="project-visual neutral"
      aria-label={`${label}: neutral project cover`}
    >
      <span>{label.slice(0, 2).toUpperCase()}</span>
    </div>
  );
}
