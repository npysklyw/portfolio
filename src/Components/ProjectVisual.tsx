import type { VisualKind } from "../content/types";

type Props = {
  kind: VisualKind;
  label: string;
  image?: string;
  detailed?: boolean;
};

export function ProjectVisual({ kind, label, image, detailed = false }: Props) {
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
        className="project-visual system-visual army-domain-visual"
        viewBox={detailed ? "0 0 760 500" : "0 0 760 350"}
        role="img"
        aria-labelledby="army-title army-desc"
      >
        <title id="army-title">MESBG Army Builder system architecture</title>
        <desc id="army-desc">
          Source-backed JSON catalogues pass through exact lookup and structural
          auditing into a TypeScript army domain. Calculation and validation
          feed the React Native builder, and a local repository stores armies
          offline.
        </desc>
        <g className="system-guide">
          <path d="M35 250H725" />
        </g>
        <g className="system-node">
          <rect x="35" y="55" width="195" height="82" />
          <text x="52" y="84">
            SOURCE-BACKED JSON
          </text>
          <text className="detail" x="52" y="112">
            catalogues and profiles
          </text>
          <rect x="282" y="55" width="195" height="82" />
          <text x="299" y="84">
            LOOKUP + AUDIT
          </text>
          <text className="detail" x="299" y="112">
            exact resolution / review
          </text>
          <rect x="529" y="55" width="195" height="82" />
          <text x="546" y="84">
            TYPESCRIPT DOMAIN
          </text>
          <text className="detail" x="546" y="112">
            pure army APIs
          </text>
          <rect x="529" y="222" width="195" height="82" />
          <text x="546" y="251">
            CALCULATE + VALIDATE
          </text>
          <text className="detail" x="546" y="279">
            totals / constraints
          </text>
          <rect x="282" y="222" width="195" height="82" />
          <text x="299" y="251">
            REACT NATIVE BUILDER
          </text>
          <text className="detail" x="299" y="279">
            domain-driven interface
          </text>
          <rect x="35" y="222" width="195" height="82" />
          <text x="52" y="251">
            LOCAL ARMY REPOSITORY
          </text>
          <text className="detail" x="52" y="279">
            offline drafts + saves
          </text>
        </g>
        <g className="system-arrow army-flow-arrows">
          <path d="M230 96h52M477 96h52M627 137v85M529 263h-52M282 263h-52" />
        </g>
        {detailed && (
          <g className="diagram-notes">
            <text x="35" y="374">
              VERIFIED DOMAIN OUTPUTS
            </text>
            <text className="detail" x="35" y="407">
              points + model totals / break value / bow allowance
            </text>
            <text className="detail" x="35" y="438">
              warband capacity / mandatory leaders / General assignment
            </text>
            <text className="detail" x="35" y="469">
              wargear + upgrades / saved-draft reconciliation
            </text>
          </g>
        )}
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
