// Branded icon library - FiftyKnots style
// Orange background, cream line-art, rounded square containers
// Matching the rocket icon from the brand identity

interface BrandIconProps {
  size?: number
  className?: string
}

const iconStyle = (size: number) => ({
  width: size,
  height: size,
})

const Wrapper = ({ size = 56, className = '', children }: BrandIconProps & { children: React.ReactNode }) => (
  <div
    className={`rounded-xl bg-orange flex items-center justify-center shrink-0 ${className}`}
    style={iconStyle(size)}
  >
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="#ECECE2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[65%] h-[65%]"
    >
      {children}
    </svg>
  </div>
)

// Rocket - launch, startup, liftoff
export function IconRocket(props: BrandIconProps) {
  return (
    <Wrapper {...props}>
      <path d="M20 8c0 0-4 4-4 12s4 12 4 12" />
      <path d="M20 8c0 0 4 4 4 12s-4 12-4 12" />
      <path d="M20 4l-2 4h4l-2-4z" fill="#ECECE2" stroke="none" />
      <line x1="16" y1="32" x2="14" y2="36" />
      <line x1="24" y1="32" x2="26" y2="36" />
      <line x1="20" y1="32" x2="20" y2="37" />
      <circle cx="20" cy="18" r="2" fill="#CC5500" stroke="#ECECE2" />
      <line x1="8" y1="28" x2="12" y2="28" />
      <line x1="8" y1="30" x2="11" y2="30" />
      <line x1="8" y1="32" x2="10" y2="32" />
    </Wrapper>
  )
}

// Lightbulb - ideas, briefing, ideation
export function IconLightbulb(props: BrandIconProps) {
  return (
    <Wrapper {...props}>
      <path d="M20 6a9 9 0 0 1 5.5 16.1c-.5.4-.8 1-1 1.6l-.5 2.3h-8l-.5-2.3c-.2-.6-.5-1.2-1-1.6A9 9 0 0 1 20 6z" />
      <line x1="16" y1="28" x2="24" y2="28" />
      <line x1="17" y1="31" x2="23" y2="31" />
      <line x1="20" y1="12" x2="20" y2="18" />
      <line x1="16" y1="15" x2="20" y2="18" />
      <line x1="24" y1="15" x2="20" y2="18" />
    </Wrapper>
  )
}

// Brain/AI - sherpa, intelligence, AI-powered
export function IconBrain(props: BrandIconProps) {
  return (
    <Wrapper {...props}>
      <path d="M20 6c-4 0-7 2-8 5-2 0-4 2-4 5s2 5 4 5c0 3 3 5 5 5h6c2 0 5-2 5-5 2 0 4-2 4-5s-2-5-4-5c-1-3-4-5-8-5z" />
      <path d="M20 10v16" />
      <path d="M16 14c2 1 4 1 6 0" />
      <path d="M15 19c2 1 6 1 8 0" />
      <circle cx="16" cy="16" r="1" fill="#ECECE2" stroke="none" />
      <circle cx="24" cy="16" r="1" fill="#ECECE2" stroke="none" />
    </Wrapper>
  )
}

// Shield/Check - quality, certification, trust
export function IconShieldCheck(props: BrandIconProps) {
  return (
    <Wrapper {...props}>
      <path d="M20 4l-12 5v8c0 8 5.5 15 12 17 6.5-2 12-9 12-17v-8l-12-5z" />
      <polyline points="14,20 18,24 26,16" />
    </Wrapper>
  )
}

// Document/Spec - specifications, plans, documents
export function IconDocument(props: BrandIconProps) {
  return (
    <Wrapper {...props}>
      <path d="M10 6h14l6 6v22a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <polyline points="24,6 24,12 30,12" />
      <line x1="14" y1="18" x2="26" y2="18" />
      <line x1="14" y1="22" x2="26" y2="22" />
      <line x1="14" y1="26" x2="22" y2="26" />
      <polyline points="15,30 17,32 21,28" strokeWidth="1.5" />
    </Wrapper>
  )
}

// Wallet/Escrow - payments, money, financial protection
export function IconWallet(props: BrandIconProps) {
  return (
    <Wrapper {...props}>
      <rect x="6" y="12" width="28" height="20" rx="3" />
      <path d="M6 12V10a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v2" />
      <rect x="24" y="19" width="6" height="6" rx="1" />
      <circle cx="27" cy="22" r="1.5" fill="#CC5500" stroke="#ECECE2" />
      <line x1="10" y1="17" x2="20" y2="17" />
    </Wrapper>
  )
}

// Chart/Growth - scaling, traction, metrics
export function IconGrowth(props: BrandIconProps) {
  return (
    <Wrapper {...props}>
      <line x1="6" y1="34" x2="6" y2="8" />
      <line x1="6" y1="34" x2="34" y2="34" />
      <polyline points="10,28 16,20 22,24 30,12" strokeWidth="2.5" />
      <polygon points="30,12 30,18 24,14" fill="#ECECE2" stroke="none" />
      <rect x="10" y="28" width="4" height="6" rx="1" fill="#ECECE2" opacity="0.3" stroke="none" />
      <rect x="17" y="24" width="4" height="10" rx="1" fill="#ECECE2" opacity="0.3" stroke="none" />
      <rect x="24" y="18" width="4" height="16" rx="1" fill="#ECECE2" opacity="0.3" stroke="none" />
    </Wrapper>
  )
}

// People/Team - experts, matching, community
export function IconTeam(props: BrandIconProps) {
  return (
    <Wrapper {...props}>
      <circle cx="20" cy="12" r="4" />
      <path d="M12 30c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <circle cx="10" cy="16" r="3" />
      <path d="M4 30c0-3.3 2.7-6 6-6" />
      <circle cx="30" cy="16" r="3" />
      <path d="M36 30c0-3.3-2.7-6-6-6" />
    </Wrapper>
  )
}

// Target/Compass - direction, validation, focus
export function IconTarget(props: BrandIconProps) {
  return (
    <Wrapper {...props}>
      <circle cx="20" cy="20" r="14" />
      <circle cx="20" cy="20" r="9" />
      <circle cx="20" cy="20" r="4" />
      <circle cx="20" cy="20" r="1.5" fill="#ECECE2" stroke="none" />
      <line x1="20" y1="4" x2="20" y2="8" />
      <line x1="20" y1="32" x2="20" y2="36" />
      <line x1="4" y1="20" x2="8" y2="20" />
      <line x1="32" y1="20" x2="36" y2="20" />
    </Wrapper>
  )
}

// Handshake/Deal - ownership, partnership, trust
export function IconOwnership(props: BrandIconProps) {
  return (
    <Wrapper {...props}>
      <path d="M6 18l6-6h4l4 4-4 4" />
      <path d="M34 18l-6-6h-4l-4 4 4 4" />
      <path d="M16 20l-2 2c-1 1-1 3 1 3l3-1 3-1c1 0 2 1 1 2l-3 3" />
      <path d="M24 20l2 2c1 1 1 3-1 3l-3-1" />
      <line x1="6" y1="12" x2="6" y2="24" />
      <line x1="34" y1="12" x2="34" y2="24" />
    </Wrapper>
  )
}

// Vault/Lock - security, data protection
export function IconVault(props: BrandIconProps) {
  return (
    <Wrapper {...props}>
      <rect x="8" y="14" width="24" height="20" rx="3" />
      <path d="M14 14V10a6 6 0 0 1 12 0v4" />
      <circle cx="20" cy="24" r="3" />
      <line x1="20" y1="27" x2="20" y2="30" />
    </Wrapper>
  )
}

// Gauge/Confidence - assessment, scoring
export function IconGauge(props: BrandIconProps) {
  return (
    <Wrapper {...props}>
      <path d="M8 28a14 14 0 0 1 24 0" fill="none" />
      <circle cx="20" cy="28" r="2" fill="#ECECE2" />
      <line x1="20" y1="28" x2="27" y2="16" strokeWidth="2.5" />
      <line x1="10" y1="22" x2="12" y2="24" />
      <line x1="14" y1="16" x2="16" y2="18" />
      <line x1="20" y1="14" x2="20" y2="16" />
      <line x1="26" y1="16" x2="24" y2="18" />
      <line x1="30" y1="22" x2="28" y2="24" />
    </Wrapper>
  )
}

// Map of all icons for easy lookup
export const brandIcons = {
  rocket: IconRocket,
  lightbulb: IconLightbulb,
  brain: IconBrain,
  shieldCheck: IconShieldCheck,
  document: IconDocument,
  wallet: IconWallet,
  growth: IconGrowth,
  team: IconTeam,
  target: IconTarget,
  ownership: IconOwnership,
  vault: IconVault,
  gauge: IconGauge,
} as const

export type BrandIconName = keyof typeof brandIcons
