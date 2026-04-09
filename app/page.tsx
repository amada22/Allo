import Script from "next/script"
import { Button } from "@/components/ui/button"
import {
  Activity,
  ArrowRight,
  Bot,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  Headphones,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react"

const metrics = [
  { value: "92%", label: "calls fully resolved without handoff" },
  { value: "<12s", label: "average time to answer new inbound calls" },
  { value: "24/7", label: "coverage across support, sales, and booking" },
]

const features = [
  {
    icon: PhoneCall,
    title: "Answer every call instantly",
    description:
      "Route inbound traffic to an AI voice agent that sounds sharp, stays on script, and never misses peak-hour demand.",
  },
  {
    icon: CalendarCheck2,
    title: "Book and update appointments",
    description:
      "Handle scheduling, rescheduling, and confirmations in real time without pushing callers into long IVR trees.",
  },
  {
    icon: Bot,
    title: "Automate follow-up actions",
    description:
      "Send summaries, log CRM updates, escalate edge cases, and trigger workflows the moment a conversation ends.",
  },
  {
    icon: ShieldCheck,
    title: "Keep control of every conversation",
    description:
      "Define business rules, escalation thresholds, and approved answers so the assistant acts like your team would.",
  },
]

const steps = [
  {
    title: "Design your call flows",
    description:
      "Set goals for support, qualification, and booking with reusable prompts and guardrails.",
  },
  {
    title: "Connect your tools",
    description:
      "Sync calendars, CRMs, ticketing systems, and internal actions so calls translate into real work.",
  },
  {
    title: "Launch, monitor, optimize",
    description:
      "Review transcripts, conversion trends, and exception cases to tighten performance week over week.",
  },
]

const useCases = [
  "Inbound support triage",
  "Lead qualification and routing",
  "Appointment booking",
  "After-hours call coverage",
  "Billing and status updates",
  "Overflow call handling",
]

export default function Home() {
  return (
    <>
      {/* ElevenLabs Convai Widget */}
      <elevenlabs-convai agent-id="agent_5501k3cktjrxeaqscmh61xvxjvbm"></elevenlabs-convai>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        async
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,197,24,0.22),_transparent_30%),radial-gradient(circle_at_20%_20%,_rgba(255,244,214,0.2),_transparent_34%),linear-gradient(180deg,_#20160c_0%,_#312114_36%,_#d9c4a3_36%,_#f4ead8_68%,_#efe2cc_100%)] text-white">
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
          <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-[#f3d15e]/16 blur-3xl" />
          <div className="absolute right-[-6rem] top-32 h-80 w-80 rounded-full bg-[#fff1cf]/10 blur-3xl" />
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-10">
            <header className="sticky top-4 z-30 mb-16">
              <div className="flex items-center justify-between rounded-full border border-white/14 bg-[#2e2014]/58 px-5 py-3 shadow-[0_18px_55px_rgba(20,10,4,0.22)] backdrop-blur-2xl">
                <a href="#home" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1cf64]/18 text-[#f6df95] ring-1 ring-inset ring-[#f1cf64]/40 backdrop-blur-xl">
                    <Waves className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold tracking-tight">Allo</div>
                    <div className="text-xs uppercase tracking-[0.32em] text-[#f2ddbb]/55">
                      Voice Ops
                    </div>
                  </div>
                </a>

                <nav className="hidden items-center gap-8 text-sm text-[#f8ead0]/74 md:flex">
                  <a href="#features" className="transition hover:text-white">
                    Features
                  </a>
                  <a href="#workflow" className="transition hover:text-white">
                    Workflow
                  </a>
                  <a href="#use-cases" className="transition hover:text-white">
                    Use cases
                  </a>
                  <a href="#pricing" className="transition hover:text-white">
                    Pricing
                  </a>
                </nav>

                <Button
                  asChild
                  size="lg"
                  className="rounded-full border border-[#ffe39a]/45 bg-[#f0c64e] px-5 text-[#2a1708] shadow-[0_12px_35px_rgba(240,198,78,0.28)] hover:bg-[#f4d46f]"
                >
                  <a href="#pricing">
                    Book a demo
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </header>

            <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f4d678]/28 bg-[#f0ca59]/12 px-4 py-2 text-sm text-[#fde9b2] backdrop-blur-xl">
                  <Sparkles className="h-4 w-4" />
                  AI call handling for support, sales, and scheduling
                </div>
                <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-balance sm:text-6xl lg:text-7xl">
                  Turn missed calls into booked meetings and resolved conversations.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f1debf]/78 sm:text-xl">
                  Allo gives your team an always-on AI voice layer that answers
                  calls, qualifies leads, books appointments, and escalates the
                  right cases with full context.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="h-13 rounded-full border border-[#ffe39a]/45 bg-[#f0c64e] px-7 text-base font-semibold text-[#2a1708] shadow-[0_12px_35px_rgba(240,198,78,0.24)] hover:bg-[#f4d46f]"
                  >
                    <a href="#pricing">
                      Start free trial
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-13 rounded-full border-[#f5dec2]/18 bg-white/8 px-7 text-base text-[#fff7e7] backdrop-blur-2xl hover:bg-white/12 hover:text-white"
                  >
                    <a href="#features">See how it works</a>
                  </Button>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-3xl border border-[#f3ddbf]/12 bg-white/8 p-5 shadow-[0_12px_40px_rgba(15,8,4,0.12)] backdrop-blur-2xl"
                    >
                      <div className="text-3xl font-semibold tracking-tight">
                        {metric.value}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-[#f2e3c8]/62">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-12 top-8 hidden h-24 w-24 rounded-full bg-[#f1ce63]/24 blur-3xl lg:block" />
                <div className="rounded-[2rem] border border-[#f7e2b7]/14 bg-[#2e2014]/44 p-5 shadow-[0_30px_120px_rgba(18,10,3,0.35)] backdrop-blur-3xl">
                  <div className="rounded-[1.6rem] border border-[#f5e3c7]/10 bg-[linear-gradient(180deg,rgba(48,32,18,0.96),rgba(33,21,12,0.82))] p-6 backdrop-blur-2xl">
                    <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-5">
                      <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-[#f6df95]/72">
                          Live call console
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                          Tuesday, 9:42 AM
                        </h2>
                      </div>
                      <div className="rounded-full bg-[#f1ca5d]/12 px-3 py-1 text-sm text-[#f9e49f] ring-1 ring-inset ring-[#f1ca5d]/20 backdrop-blur-xl">
                        Agent active
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="rounded-3xl border border-white/8 bg-white/7 p-4 backdrop-blur-2xl">
                        <div className="flex items-center justify-between text-sm text-[#f0dfc3]/58">
                          <span>Inbound call</span>
                          <span>00:37</span>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1ce63]/14 text-[#fbe8a9] backdrop-blur-xl">
                            <Headphones className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">Renewal question</div>
                            <div className="text-sm text-[#f0dfc3]/58">
                              Existing customer, billing update requested
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl border border-white/8 bg-white/5 p-4 backdrop-blur-2xl">
                          <div className="flex items-center gap-2 text-sm text-[#f0dfc3]/62">
                            <Activity className="h-4 w-4 text-[#f6df95]" />
                            Intent detected
                          </div>
                          <div className="mt-3 text-xl font-semibold">
                            Billing support
                          </div>
                          <p className="mt-2 text-sm leading-6 text-[#f0dfc3]/58">
                            Verified identity and prepared balance summary before
                            routing.
                          </p>
                        </div>
                        <div className="rounded-3xl border border-white/8 bg-white/5 p-4 backdrop-blur-2xl">
                          <div className="flex items-center gap-2 text-sm text-[#f0dfc3]/62">
                            <Clock3 className="h-4 w-4 text-[#f6df95]" />
                            Next action
                          </div>
                          <div className="mt-3 text-xl font-semibold">
                            Send recap + ticket
                          </div>
                          <p className="mt-2 text-sm leading-6 text-[#f0dfc3]/58">
                            CRM note, payment link, and priority tag queued
                            automatically.
                          </p>
                        </div>
                      </div>

                      <div className="rounded-3xl border border-[#f3d15e]/16 bg-[#f1c95c]/8 p-4 backdrop-blur-2xl">
                        <div className="flex items-center gap-2 text-sm text-[#fdecb4]/82">
                          <CheckCircle2 className="h-4 w-4" />
                          Outcomes generated from this call
                        </div>
                        <div className="mt-4 grid gap-3 text-sm text-[#fff5dd]/78 sm:grid-cols-2">
                          <div className="rounded-2xl bg-[#21140b]/34 px-4 py-3 backdrop-blur-xl">
                            Customer summary delivered to HubSpot
                          </div>
                          <div className="rounded-2xl bg-[#21140b]/34 px-4 py-3 backdrop-blur-xl">
                            Support ticket tagged for finance team
                          </div>
                          <div className="rounded-2xl bg-[#21140b]/34 px-4 py-3 backdrop-blur-xl">
                            Follow-up SMS sent with payment instructions
                          </div>
                          <div className="rounded-2xl bg-[#21140b]/34 px-4 py-3 backdrop-blur-xl">
                            Confidence score logged for QA review
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="relative text-[#352112]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div className="max-w-xl">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b78719]">
                  Product
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
                  A voice operations layer built for real call volume.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#73553a]">
                  Replace voicemail dead ends and repetitive call tasks with a
                  system designed to answer fast, take action, and keep humans
                  focused on high-value conversations.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {features.map((feature) => {
                  const Icon = feature.icon

                  return (
                    <article
                      key={feature.title}
                      className="rounded-[1.75rem] border border-[#ead8bb] bg-white/52 p-6 shadow-[0_20px_60px_rgba(42,23,8,0.08)] backdrop-blur-2xl"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f6e4a3]/75 text-[#9b6b09] backdrop-blur-xl">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-[#73553a]">
                        {feature.description}
                      </p>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="workflow"
          className="border-y border-[#e3d2b4] bg-[linear-gradient(180deg,_#efe3cc_0%,_#e6d4b3_100%)] text-[#352112]"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b78719]">
                  Workflow
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  Launch an AI call team without rebuilding your operations.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-[#73553a]">
                  Allo fits into the systems you already use, then gives you the
                  monitoring surface to improve conversion, resolution, and speed.
                </p>
              </div>

              <div className="space-y-5">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex gap-5 rounded-[1.75rem] border border-[#e8d7b9] bg-white/50 p-6 shadow-[0_12px_40px_rgba(42,23,8,0.06)] backdrop-blur-2xl"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3a2412] text-sm font-semibold text-[#ffefb6] shadow-[0_10px_28px_rgba(58,36,18,0.2)]">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-[#73553a]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="use-cases" className="bg-[linear-gradient(180deg,_#26180d_0%,_#1d130a_100%)] text-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f6df95]/70">
                  Use cases
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  One platform for the calls that matter most.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-[#f1debf]/72">
                  Whether you need after-hours support, better lead response, or
                  less manual scheduling, the same voice layer can adapt to each
                  workflow.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {useCases.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-[#f3ddbf]/12 bg-white/7 px-5 py-6 text-lg font-medium text-[#fff7e3] backdrop-blur-2xl"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-[linear-gradient(180deg,_#1d130a_0%,_#1a1109_100%)] pb-24 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="rounded-[2rem] border border-[#f3ddbf]/12 bg-[linear-gradient(135deg,rgba(240,198,78,0.18),rgba(255,255,255,0.05))] p-8 shadow-[0_24px_90px_rgba(0,0,0,0.32)] backdrop-blur-3xl lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#f6df95]/72">
                    Pricing
                  </p>
                  <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                    Start with a live AI agent, then scale into a complete call
                    operation.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#f1debf]/72">
                    Launch quickly with one workflow or connect the whole stack
                    across intake, support, and follow-up automation.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-[#f3ddbf]/12 bg-[#2a1a0d]/42 p-6 backdrop-blur-2xl lg:min-w-[300px]">
                  <div className="text-sm uppercase tracking-[0.28em] text-[#f6df95]/62">
                    Growth plan
                  </div>
                  <div className="mt-4 text-5xl font-semibold tracking-tight">
                    $299
                    <span className="ml-2 text-lg font-normal text-[#f0dfc3]/58">
                      /month
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#f0dfc3]/62">
                    Includes AI call handling, booking flows, CRM actions, and
                    transcript analytics.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="mt-6 h-12 w-full rounded-full border border-[#ffe39a]/45 bg-[#f0c64e] text-[#2a1708] shadow-[0_12px_35px_rgba(240,198,78,0.24)] hover:bg-[#f4d46f]"
                  >
                    <a href="mailto:hello@allo.com">Talk to sales</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
