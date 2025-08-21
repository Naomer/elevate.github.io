import { useState } from "react";
import { Search, Menu, X, ArrowRight, Github, Twitter, Facebook, Linkedin, Youtube, Globe, BookOpen, Wrench, LifeBuoy, Newspaper, ShieldCheck, Layers, Server, Cpu, Code2, Link2, MessageSquare, Zap, LayoutGrid } from "lucide-react";

export default function DevPortalClone() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const NavLink = ({ label }: { label: string }) => (
    <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">{label}</a>
  );

  const PrimaryButton = ({ children }: { children: React.ReactNode }) => (
    <button className="px-4 py-2 rounded-2xl bg-black text-white text-sm font-semibold hover:opacity-90 shadow">
      {children}
    </button>
  );

  const SecondaryButton = ({ children }: { children: React.ReactNode }) => (
    <button className="px-4 py-2 rounded-2xl bg-white border border-gray-200 text-sm font-semibold hover:bg-gray-50 shadow-sm">
      {children}
    </button>
  );

  const Card = ({ icon: Icon, title, body, cta }: { icon: any; title: string; body: string; cta?: string }) => (
    <div className="group rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow bg-white">
      <div className="flex items-center gap-3">
        <div className="rounded-xl p-2 border border-gray-200">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mt-3">{body}</p>
      {cta && (
        <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
          {cta} <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </div>
  );

  const FooterLink = ({ label }: { label: string }) => (
    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">{label}</a>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top Announcement Bar */}
      <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center text-sm py-2">
        <p className="px-4">New: Platform Status dashboard redesign. <a href="#" className="underline font-semibold">Check it out</a></p>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <button className="md:hidden p-2 rounded-xl border border-gray-200" onClick={() => setMobileOpen(true)} aria-label="Open menu">
                <Menu className="w-5 h-5" />
              </button>
              <a href="#" className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight">ᴇʟᴇᴠʌᴛᴇ</span>
              </a>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <NavLink label="Products" />
              <NavLink label="Docs" />
              <NavLink label="Tools" />
              <NavLink label="Support" />
              <NavLink label="Blog" />
              <NavLink label="Status" />
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <input className="pl-9 pr-3 py-2 rounded-xl border border-gray-200 bg-white text-sm w-64 focus:outline-none focus:ring-2 focus:ring-gray-200" placeholder="Search docs, APIs, tools" />
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
              <SecondaryButton>Sign in</SecondaryButton>
              <PrimaryButton>Get started</PrimaryButton>
            </div>
          </div>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold">Menu</span>
                <button className="p-2 rounded-xl border border-gray-200" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="grid gap-3">
                {["Products","Docs","Tools","Support","Blog","Status"].map(i => (
                  <a key={i} href="#" className="px-3 py-2 rounded-xl border border-gray-200 bg-white">{i}</a>
                ))}
                <div className="flex items-center gap-2">
                  <input className="flex-1 pl-9 pr-3 py-2 rounded-xl border border-gray-200 bg-white text-sm" placeholder="Search docs, APIs, tools" />
                  <Search className="w-4 h-4 -ml-7 text-gray-500" />
                </div>
                <div className="flex items-center gap-2">
                  <SecondaryButton>Sign in</SecondaryButton>
                  <PrimaryButton>Get started</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">Build, grow, and monetize with our platform</h1>
              <p className="text-lg text-gray-600 mt-4 max-w-xl">Access powerful APIs, SDKs, and tools to bring social features, messaging, identity, and immersive experiences to your apps.</p>
              <div className="flex items-center gap-3 mt-6">
                <PrimaryButton>Browse products</PrimaryButton>
                <SecondaryButton>Read the docs</SecondaryButton>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Privacy-first</div>
                <div className="flex items-center gap-2"><Zap className="w-4 h-4"/> Reliable APIs</div>
                <div className="flex items-center gap-2"><Server className="w-4 h-4"/> Status dashboard</div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 shadow-inner" />
              <div className="absolute -bottom-4 -right-4 bg-white border border-gray-200 rounded-2xl p-4 shadow-md flex items-center gap-3">
                <div className="rounded-xl p-2 border border-gray-200"><Code2 className="w-5 h-5"/></div>
                <div>
                  <div className="text-sm font-semibold">Graph API vX.Y</div>
                  <div className="text-xs text-gray-600">Now with improved webhooks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-10 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold">Products</h2>
            <a href="#" className="text-sm font-semibold flex items-center gap-1">See all <ArrowRight className="w-4 h-4"/></a>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
            <Card icon={Layers} title="Login & Identity" body="Simplify sign-in and personalize experiences with secure OAuth flows." cta="Explore Facebook Login" />
            <Card icon={Link2} title="Graph API" body="Access social graphs, pages, media, and insights with a unified API." cta="View Graph docs" />
            <Card icon={MessageSquare} title="Messaging" body="Build rich conversations with WhatsApp Business and Messenger." cta="Build messaging" />
            <Card icon={LayoutGrid} title="Instagram APIs" body="Publish, moderate, and analyze Instagram content and conversations." cta="Use Instagram APIs" />
            <Card icon={Cpu} title="Spark AR & Effects" body="Create immersive AR effects to grow your audience." cta="Start with Spark AR" />
            <Card icon={Server} title="Webhooks & Events" body="Subscribe to real-time updates for pages, apps, and messages." cta="Configure webhooks" />
            <Card icon={Wrench} title="SDKs & Tools" body="Official SDKs for JavaScript, Android, iOS, Unity, and more." cta="Browse SDKs" />
            <Card icon={Globe} title="Meta Horizon" body="Build for mixed reality devices and experiences." cta="Get Horizon tools" />
          </div>
        </div>
      </section>

      {/* Docs spotlight */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold">Documentation</h2>
              <p className="text-sm text-gray-600 mt-2">Quick links to get you building fast.</p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              <a href="#" className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5"/>
                  <div>
                    <div className="font-semibold">Get started with our SDKs</div>
                    <div className="text-sm text-gray-600">Install, initialize, and make your first API call.</div>
                  </div>
                </div>
              </a>
              <a href="#" className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5"/>
                  <div>
                    <div className="font-semibold">App review & permissions</div>
                    <div className="text-sm text-gray-600">Understand scopes, permissions, and verification.</div>
                  </div>
                </div>
              </a>
              <a href="#" className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5"/>
                  <div>
                    <div className="font-semibold">Security best practices</div>
                    <div className="text-sm text-gray-600">Protect tokens, webhooks, and user data.</div>
                  </div>
                </div>
              </a>
              <a href="#" className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <Server className="w-5 h-5"/>
                  <div>
                    <div className="font-semibold">Webhooks quickstart</div>
                    <div className="text-sm text-gray-600">Receive and verify real-time events.</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold">Developer Tools</h2>
            <a href="#" className="text-sm font-semibold flex items-center gap-1">Browse tools <ArrowRight className="w-4 h-4"/></a>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            <Card icon={Wrench} title="App Dashboard" body="Configure products, secrets, roles, and review." cta="Open dashboard" />
            <Card icon={Server} title="Status" body="Real-time and historical uptime for APIs and services." cta="View status" />
            <Card icon={Cpu} title="Test Users & Data" body="Seed data, create test users, and validate flows." cta="Create test data" />
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold">Latest updates</h2>
            <a href="#" className="text-sm font-semibold flex items-center gap-1">Developer Blog <ArrowRight className="w-4 h-4"/></a>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md transition">
                <div className="text-xs text-gray-500">Aug 2025</div>
                <a href="#" className="block mt-2 font-semibold leading-snug">Introducing vX.Y of the Graph API with improved rate limits</a>
                <p className="text-sm text-gray-600 mt-2">Learn about performance improvements, new webhooks, and migration steps.</p>
                <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold mt-4">Read more <ArrowRight className="w-4 h-4"/></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div>
              <h2 className="text-2xl font-bold">Support</h2>
              <p className="text-sm text-gray-600 mt-2">Find answers, get help, and connect with the community.</p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              <a href="#" className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md transition flex items-start gap-3">
                <LifeBuoy className="w-5 h-5"/>
                <div>
                  <div className="font-semibold">Developer support</div>
                  <div className="text-sm text-gray-600">Submit a ticket or browse help articles.</div>
                </div>
              </a>
              <a href="#" className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md transition flex items-start gap-3">
                <Newspaper className="w-5 h-5"/>
                <div>
                  <div className="font-semibold">Changelog</div>
                  <div className="text-sm text-gray-600">Breaking changes, deprecations, and releases.</div>
                </div>
              </a>
              <a href="#" className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md transition flex items-start gap-3">
                <BookOpen className="w-5 h-5"/>
                <div>
                  <div className="font-semibold">Community forum</div>
                  <div className="text-sm text-gray-600">Ask questions and share solutions.</div>
                </div>
              </a>
              <a href="#" className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md transition flex items-start gap-3">
                <ShieldCheck className="w-5 h-5"/>
                <div>
                  <div className="font-semibold">Policies & review</div>
                  <div className="text-sm text-gray-600">Read platform terms and submission guidelines.</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold">Stay in the loop</h3>
              <p className="text-sm text-gray-600">Get product news, updates, and best practices.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input type="email" placeholder="you@example.com" className="flex-1 md:w-80 px-3 py-2 rounded-xl border border-gray-200" />
              <PrimaryButton>Subscribe</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-black flex items-center justify-center text-white font-bold">D</div>
                <span className="text-lg font-bold tracking-tight">DevPortal</span>
              </div>
              <p className="text-sm text-gray-600 mt-3 max-w-sm">A clean, developer-first template inspired by Meta for Developers. Replace names, links, and content with your own.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <a href="#" aria-label="Twitter" className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50"><Twitter className="w-4 h-4"/></a>
                <a href="#" aria-label="Facebook" className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50"><Facebook className="w-4 h-4"/></a>
                <a href="#" aria-label="LinkedIn" className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50"><Linkedin className="w-4 h-4"/></a>
                <a href="#" aria-label="YouTube" className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50"><Youtube className="w-4 h-4"/></a>
                <a href="#" aria-label="GitHub" className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50"><Github className="w-4 h-4"/></a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Build with Meta</h4>
                <div className="flex flex-col gap-2">
                  <FooterLink label="AI" />
                  <FooterLink label="Meta Horizon OS" />
                  <FooterLink label="Social technologies" />
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">News & Docs</h4>
                <div className="flex flex-col gap-2">
                  <FooterLink label="Blog" />
                  <FooterLink label="Success stories" />
                  <FooterLink label="Docs" />
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Support</h4>
                <div className="flex flex-col gap-2">
                  <FooterLink label="Developer support" />
                  <FooterLink label="Bug tool" />
                  <FooterLink label="Platform status" />
                  <FooterLink label="Community forum" />
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Policies</h4>
                <div className="flex flex-col gap-2">
                  <FooterLink label="Responsible initiatives" />
                  <FooterLink label="Platform terms" />
                  <FooterLink label="Developer policies" />
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">Company</h4>
                <div className="flex flex-col gap-2">
                  <FooterLink label="About" />
                  <FooterLink label="Careers" />
                  <FooterLink label="Contact" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} DevPortal</span>
              <span>•</span>
              <a href="#" className="hover:text-gray-900">All rights reserved</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
