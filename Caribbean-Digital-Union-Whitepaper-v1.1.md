# The Caribbean Digital Union

### White Paper v1.1

*The digital infrastructure for a new Caribbean economy. The Caribbean Digital Union is building the first, and the most efficient, fully digital economy administered by accountable AI agents: one shared settlement network, one participatory government, and one regional capital market, owned by its members. It is engineered to make transacting and governing cost less here than anywhere else on earth.*

---

## In one paragraph

The Caribbean Digital Union (CDU) is the digital infrastructure for a new Caribbean economy. Its ambition is to become the first, and the most efficient, fully digital economy administered by accountable AI agents: a place where any verified citizen or business can earn, transact, save, raise capital, and be governed, at a fraction of the cost charged by the systems that serve the region today. In practice that begins with letting any verified Caribbean citizen or business move money across borders in seconds, participate directly in how the union is governed, and access a growing set of public services that expand from payments into registries, dispute resolution, a regional capital market, and insurance access. The union runs its own fully reserved digital settlement unit, the **Caribbean Currency Unit (CCU)**, whose value is set by a weighted basket of Caribbean currencies rather than by a peg to the US dollar. It is governed as a **DAO** (a decentralized autonomous organization, a group whose rules and treasury are managed transparently by its members through recorded votes) with real legal standing, so that decisions are collective but liability is properly held by a legal entity, and its public administration is carried out increasingly by AI agents working under human supervision. This paper states exactly what the CDU does, what everything costs, and how each process works.

---

## How to read this document

Key terms are defined the first time they appear. Every rule that involves a number states a **default value** and how that value can be changed. Unless stated otherwise, defaults are changed by a citizen vote (see Section 5). This document is written to be understood in full by a prospective citizen, an elected official, a development bank officer, or any general reader.

---

## 1. Why the Caribbean Digital Union exists

For forty years the Caribbean has struggled to achieve true unity. Despite the efforts of CARICOM, islands that share almost everything, the same exposure to climate, the same pressures on food security, and deeply connected cultures, have never achieved meaningful economic and political coordination. That coordination has long been understood to be the key to a faster growing economy, a higher quality of life, and stronger trade both among the islands and with the rest of the world. The potential is enormous: taken together, the Caribbean is a people of around 45 million with a combined economy of roughly 700 billion dollars. Yet it remains divided into silos, an inheritance of the slave trade and of the colonial powers that drew the region's map. Nearly two centuries after emancipation, much of the Caribbean still runs on systems that were built to extract value from it rather than to create value within it.

Integration has stalled for understandable reasons. Sovereignty is precious and hard won, and the political consensus required to pool it has been slow and difficult to reach. But a people this connected has been kept apart for too long, and waiting carries a cost of its own.

Unity has never simply been handed to any people. Across the rise and fall of empires, from the Mongols and the Persians to the Romans and the dynasties that followed, the systems that shaped people's lives were built by those with the will to build them. Unity will not arrive on its own, and it will not be granted by circumstance. If the Caribbean is to be united, its people must build that unity themselves.

Today, we in the modern era are waging economic warfare against the continuation of a divided Caribbean. We no longer want the economic structures imposed on the region by the colonial powers. We are building a new economy from the ground up: the Caribbean Digital Union.

One Caribbean economy. One system of government. One currency. One market. Yesterday you were born into systems that were designed, long ago and by others, to extract value from you. Today you have a choice: to help build a new one, and to unite a people who have been separated for generations.

---

## 2. What the CDU is, precisely

The CDU is a single, complete digital economy with four working parts, and its public administration is carried out increasingly by accountable AI agents under human supervision:

1. **A settlement network.** Verified members send value to one another instantly, 24 hours a day, in CCU, for a low flat fee.
2. **A government.** Members govern the union directly through recorded votes, fund it through transparent fees and taxes, and receive public services.
3. **A capital market.** Members and enterprises raise and allocate capital regionally through compliant structures, and members can save inside the union.
4. **An administration run by agents.** The union delivers its public services (payments, identity, registry, dispute resolution, insurance access, data) increasingly through AI agents that work within encoded rules, log every action, and operate under human supervision with circuit breakers (Section 7.9). This is what allows the union to run a real government at a fraction of the usual administrative cost.

Governance runs as a DAO. Legal responsibility sits with a real legal entity (see Section 9). The DAO decides; the legal entity acts and bears liability; the agents execute.

---

## 3. The Caribbean Currency Unit, and saving in the union

**What it is.** The CCU is the union's digital settlement unit: a fully reserved digital token whose value is defined by a weighted basket of Caribbean currencies, not by a peg to the US dollar. Holding value in CCU means holding value in the Caribbean economy as a whole, insulated from the swings of any single national currency and independent of the United States dollar.

**How its value is set (the basket method).** The CCU uses the same established method as the International Monetary Fund's Special Drawing Right and the historical European Currency Unit: a fixed basket. One CCU is defined as a fixed quantity of each member currency. Its value in any currency is the sum of those quantities converted at current market rates. The quantities are set so that, at launch, each currency contributes its target weight, and each currency's weight is its share of the union's combined gross domestic product (GDP).

**Formula.** The value of one CCU, in US dollars, at time t is:

>  CCU$(t) = the sum over all member currencies i of ( q_i multiplied by e_i(t) )

where q_i is the fixed quantity of currency i held in one CCU, and e_i(t) is the US dollar value of one unit of currency i at time t.

The fixed quantities are struck once, at launch:

>  q_i = ( w_i multiplied by V0 ) divided by e_i(0)

where w_i is currency i's GDP weight, V0 is the chosen launch value of one CCU in US dollars, and e_i(0) is the launch exchange rate. The CDU sets V0 to 1.0000 US dollar at launch. This is a convenience, so that one CCU is a familiar everyday amount. It is not a peg. Once the quantities q_i are fixed, the value floats freely with the basket.

**Worked valuation (illustrative, at end June 2026 rates).**

| Currency (economy) | GDP weight w_i | Rate e_i (US$ per unit) | Quantity q_i in 1 CCU | Contribution (US$) |
|---|---|---|---|---|
| Trinidad and Tobago dollar (TTD) | 22% | 0.147710 | 1.4894 | 0.2200 |
| Guyanese dollar (GYD) | 20% | 0.004785 | 41.797 | 0.2000 |
| Jamaican dollar (JMD) | 16% | 0.006357 | 25.169 | 0.1600 |
| Haitian gourde (HTG) | 16% | 0.007644 | 20.931 | 0.1600 |
| Bahamian dollar (BSD, pegged 1.00) | 11% | 1.000000 | 0.1100 | 0.1100 |
| Eastern Caribbean dollar (XCD, includes Saint Lucia) | 7% | 0.370370 | 0.1890 | 0.0700 |
| Barbados dollar (BBD, pegged 2.00) | 5% | 0.500000 | 0.1000 | 0.0500 |
| Belize dollar (BZD, pegged 2.00) | 3% | 0.500000 | 0.0600 | 0.0300 |
| **One CCU** | **100%** | | | **1.0000** |

At launch, one CCU is worth **US$1.0000** by construction. The four pegged currencies are fixed by their central banks; the four floating currencies use prevailing market rates. GDP weights are illustrative and are finalized against audited GDP figures at launch.

**Why this is not a US dollar peg, shown.** Because the quantities are fixed, the CCU moves as its member currencies move. About 74 percent of the basket (Trinidad and Tobago, Guyana, Jamaica, Haiti) floats against the US dollar; about 26 percent (Bahamas, the Eastern Caribbean, Barbados, Belize) is currently dollar linked. Suppose that over one year the floating members depreciated on average 6 percent against the US dollar while the dollar linked members held. The same basket would then be worth:

>  0.26 + ( 0.74 multiplied by 0.94 ) = US$0.956

One CCU would be worth about 96 US cents, a fall of roughly 4.4 percent against the US dollar, while its value across the union's own economy would be unchanged. This is the purpose of a basket: the CCU tracks the Caribbean economy, not the United States dollar.

**Why the CDU does not simply average the exchange rates.** Caribbean currencies are denominated very differently. One Bahamian dollar is worth about one US dollar, while one Guyanese dollar is worth about half a US cent. A naive average of per unit values would be dominated by these denomination differences and would carry no economic meaning. The basket method weights by economic value, which is why it is the standard used by the International Monetary Fund.

**Reserves and rebalancing.** Every CCU in circulation is backed 100 percent by reserves held in the basket's member currencies as cash and high quality, liquid, short term instruments. Reserves are never lent or leveraged, are kept liquid so the CCU is always redeemable on demand, and are audited every quarter with the attestation published to all citizens. The basket's membership and weights are reviewed and re struck annually by citizen vote (a two thirds supermajority), so the CCU keeps tracking the union's real economic composition as it grows.

**Saving in the union: the CCU and the CCU Savings fund.** The union deliberately separates the money people spend from the money people save, because the two need opposite properties. The CCU itself is built for safety and instant use. A second, optional product, the **CCU Savings fund**, is built to pay a return. No citizen is ever required to use it, and the two are kept strictly apart.

**The CCU stays safe and pays no yield.** As set out above, every CCU is fully backed by liquid, high quality reserves and is redeemable on demand, and it pays no interest. This keeps the CCU a clean means of payment and keeps the money citizens rely on for daily life out of reach of investment risk. It also matches how payment tokens are now regulated in major markets, where the payment instrument itself does not pay yield.

**The CCU Savings fund (optional, yield bearing).** Any citizen may move CCU they do not need for daily use into the CCU Savings fund. The fund is a regulated investment vehicle, structured as a money market style fund or a licensed deposit, that holds a diversified portfolio of Caribbean government securities and passes the return to its savers. A saver receives a holding in the fund, can see its value and its yield at any time, and can redeem under the fund's published terms. The fund is a separate product from the CCU: it does not carry the CCU's on demand, one for one guarantee, and its value reflects the assets it holds.

**What the fund can pay.** The fund pays a floating rate set by what its portfolio earns, after costs and a loss reserve. On current regional government yields, a sustainable rate is expected in the range of 3 to 4 percent, comfortably above the roughly 2 percent paid by regional credit unions, with the possibility of more if savers accept more risk. The rate is never a fixed promise. It moves with the portfolio, and the union publishes the rate, the holdings, and the fund's audited results.

**How the fund invests (guardrails).** The fund exists to keep Caribbean savings inside the Caribbean economy, financing Caribbean governments rather than foreign treasuries. It invests prudently, not for the highest headline yield:

- It is diversified across the investable government securities of the union's members, broadly in line with the CCU basket, and is never concentrated in a single borrower.
- A per issuer cap and a minimum liquid reserve are held so that savers can always redeem.
- Securities that are not practically investable, whether through instability or distress, are excluded regardless of their weight in the CCU basket.
- A capital and loss buffer absorbs losses before any saver is affected.

The fund never chases the highest available yield, because in government debt the highest yield is a marker of the highest risk of default.

**Honesty about risk.** Caribbean governments have restructured their debt before, regional bond markets are thin, and the region's disaster risk is shared across its members. The fund is diversified and buffered against this, but it remains an investment, not a guaranteed deposit, and this is stated plainly to every citizen before they choose to opt in.

**Legal.** The CCU Savings fund is offered only through the appropriate regulated wrapper in each market, established with counsel, and is made available to savers outside the region only where it can be offered compliantly. The safe, non yield CCU remains available to everyone regardless.

---

## 4. Citizenship

### 4.1 Who can join, and what it costs

The union is for the whole Caribbean people, at home and abroad. Individual citizenship is open to two groups:

- **Caribbean nationals:** any person born in, or holding the nationality of, a Caribbean state.
- **The Caribbean diaspora:** any person living abroad who can show Caribbean descent, meaning at least one parent or grandparent who is or was a national of a Caribbean state.

Enterprise membership is open to enterprises registered or operating in the region, or majority owned by eligible citizens.

- **Individual citizenship: free.** (Default; changed by vote.)
- **Enterprise registration: 100 CCU, one time.** (Default; changed by vote.)

The recognized list of Caribbean states is maintained by citizen vote.

### 4.2 The one person, one identity rule

Each verified human is exactly one citizen with exactly one vote. Each verified enterprise is one registered member. **Citizenship is non transferable.** It is a status, not an asset that can be bought or sold. This rule is the foundation of honest governance: it prevents any actor from creating many identities to capture votes, drain rewards, or manipulate disputes.

### 4.3 How to become a citizen (process)

1. Download the CDU app or register on the CDU website.
2. **Prove who you are.** Submit a government issued photo ID and a live selfie. The union's verification system (automated checks plus an agent review) confirms you are a real, unique person. This is what enforces one person, one identity (Section 4.2). Target: complete within 10 minutes for standard cases.
3. **Prove you are eligible.** Provide the documents for your track:
   - **Caribbean nationals:** a valid Caribbean passport or national identity card.
   - **The Caribbean diaspora:** your own passport or photo ID, plus a documentary chain proving descent, namely your birth certificate showing your parents' names, together with the identification of the qualifying parent showing their Caribbean nationality. Where descent runs through a grandparent, the chain extends one generation: the parent's birth certificate naming the grandparent, and the grandparent's proof of Caribbean nationality.

   Documents are checked for authenticity by automated verification and, where needed, human review. Where standard documents are genuinely unavailable, the union may accept alternative evidence under review.
4. On approval, you receive a CDU wallet and a citizen ID, and you gain full citizenship rights. You can immediately send, receive, and hold CCU, and you gain the right to vote. **All citizens are equal:** one verified person is one citizen with one vote, whether they live in the Caribbean or in the diaspora.

Sensitive documents such as birth certificates and family identification are handled under the union's data policy: verified, kept to the minimum needed, protected, and never shared beyond what verification requires.

### 4.4 Rights, obligations, and exit

Citizens gain: low cost settlement, a governance vote and paid participation, access to union services, standing in the dispute system, and the legal protections of the union's structure. Citizens agree to follow the constitution and rules, participate honestly, and accept the outcomes of properly conducted votes and disputes.

**Exit is guaranteed.** Any citizen may leave at any time and withdraw the full, unencumbered balance of their own CCU and any assets they are entitled to. Members are never trapped.

---

## 5. Government and governance

### 5.1 What the DAO decides

Routine, rule based administration is handled by defined processes and supervised agents (see Section 7). Only genuinely collective, high stakes questions go to a citizen vote: constitutional changes, changes to the default parameters in this paper (fees, taxes, the CCU basket, the reserve ratio), treasury allocations above 250,000 CCU, and admission of new service categories.

### 5.2 How a vote works (process)

1. **Draft.** Any citizen may draft a proposal.
2. **Endorse.** A proposal reaches the ballot once it is endorsed by **1 percent of citizens, or 500 citizens, whichever is fewer** (default; changed by vote).
3. **Debate and vote.** The voting window is **7 days** (default). Citizens read the proposal and cast votes.
4. **Decide.** A result is valid only if **at least 10 percent of citizens vote** (quorum, default). A standard proposal passes on a **simple majority (over 50 percent)**. A constitutional change, a parameter change, or a treasury allocation over **250,000 CCU** requires a **two thirds majority (66.7 percent)**.
5. **Execute.** A passed proposal is executed by the union's legal entity and its agents.

### 5.3 How votes are weighted

For major votes, the CDU uses **quadratic voting**: each citizen has a budget of voting credits, and casting n votes on one question costs n squared credits. This lets a citizen express how strongly they care while stopping any single person or wealthy bloc from dominating. Because every citizen is a single verified identity (Section 4.2), this system cannot be gamed by splitting into many accounts.

### 5.4 Getting paid to participate

Citizens are paid to govern, because governance is real work.

- **Participation reward: 2 CCU per vote** cast on a proposal the citizen has actually opened and reviewed, capped at **20 CCU per citizen per month** (defaults; changed by vote). The cap prevents reward farming.
- Routine engagement additionally earns **non transferable reputation**, which raises a citizen's standing to serve as a dispute juror and to hold administrative roles.

### 5.5 Administration and its cost ceiling

Anyone who performs an administrative decision, human or agent, is paid a published, task based rate, and every administrative decision is logged and attributable to whoever made it.

The union commits to radical efficiency by rule: **total administrative expenditure is capped at 10 percent of the union's annual revenue** (default; changed only by two thirds supermajority). This cap is set to keep the CDU operating below half the regional average ratio of public administration cost to GDP, the union's core promise on the cost of government.

---

## 6. Money in, money out: the fiscal model

The CDU funds itself through three clearly separated streams. **A casual user who only sends money ever pays just the 1 percent settlement fee.** The profit tax applies only to enterprises that choose to operate inside the CDU economy.

### 6.1 Settlement fee, the price of moving money

- **1.0 percent of the amount sent** (default; changed by vote; hard cap 2.0 percent).
- This is the union's primary revenue stream and is deliberately low so the CDU decisively beats the 6 to 7 percent charged by incumbents.

### 6.2 Union Profit Tax, the price of operating inside the economy

- **20 percent flat on net profit** for enterprises registered to operate within the CDU economy (default; changed by vote).
- **Individuals earning under 15,000 CCU per year through the CDU pay 0 percent** (default; changed by vote).
- This is competitive against Caribbean corporate tax rates of 25 to 30 percent, and it buys registered enterprises real benefits: capital market access, the union's legal protections, and its services. It applies to profit earned through the union, not to money simply passing through the payment rails.

### 6.3 Service fees

- **Data search:** 0.5 CCU per public record query; 5 CCU per restricted or sensitive query, where authorized (defaults; changed by vote).
- **Enterprise registration:** 100 CCU one time (as in Section 4.1).
- **Dispute bond:** set per Section 8.

### 6.4 Where the money goes

Revenue funds: the reserve and liquidity of the CCU, service delivery and agent operations, reserves (including a contingency reserve), and development and compliance. Administrative spend is held under the 10 percent cap of Section 5.5. All treasury flows are recorded and auditable by every citizen.

---

## 7. Public services

Services launch in phases (timeline in Section 11). Each is defined below with what it is, how it works, and what it costs.

### 7.1 Send Money, the launch service (Phase 1)

**What it is.** Instant, low cost transfer of value between any two CDU wallets, anywhere, at any time, built first for the diaspora to home corridor, where today's costs are highest.

**How it works (process).**
1. The sender funds the transfer in US dollars (by card, bank transfer, or a cash in partner).
2. The dollars are converted to CCU at the prevailing rate (about one CCU per US dollar at launch) and held fully in reserve.
3. The CCU arrives in the recipient's CDU wallet in seconds.
4. The recipient holds the CCU, spends it with CDU merchants, sends it onward, or cashes out to a local bank account, mobile wallet, or cash out agent at the prevailing rate (a cash out partner may charge a separate local fee).

**What it costs.** 1.0 percent of the amount sent (Section 6.1).

**Worked example.** Maria in New York sends USD 200 to her mother in Castries. The CDU fee is USD 2.00 (1 percent). At launch, one CCU is worth about one US dollar, so her mother receives about **198 CCU (about USD 198) in seconds**. Through a typical incumbent at 6.5 percent, Maria's mother would receive about USD 187 after roughly USD 13 in fees, and wait one to three days.

### 7.2 Digital Identity (Phase 1)

**What it is.** A verified, privacy respecting digital identity for every citizen, the credential that makes honest voting, clean payments, and trusted services possible. It is the substrate beneath every other service, not a standalone product.

**How it works.** Identity is established during citizenship (Section 4.3), with anti money laundering and counter terrorist financing checks built in from day one. Citizens control what they share; the union verifies uniqueness without exposing unnecessary personal data.

**What it costs.** Included in citizenship.

### 7.3 Business Registry (Phase 2)

**What it is.** Registration and records for enterprises operating in the CDU, a verifiable, tamper evident record of who a business is and its standing.

**How it works.** An enterprise completes verification (Section 4.1), receives a registry entry, and can then transact, hire, raise capital, and access services within the union.

**What it costs.** 100 CCU one time registration; profit tax per Section 6.2.

### 7.4 Dispute Resolution (Phase 2)

Defined in full in Section 8.

### 7.5 Cross border B2B Settlement and Trade Facilitation (Phase 2)

**What it is.** Instant business to business settlement across islands in CCU, replacing the slow, dollar converting, high fee wire process, plus supporting records (invoices, certificates) that ease legitimate cross border commerce.

**How it works.** A registered business pays a supplier in another island in CCU, settled instantly, with the transaction and its documents recorded for both parties.

**What it costs.** 1.0 percent settlement fee (Section 6.1).

### 7.6 Data Services (Phase 2)

**What it is.** A searchable union database. Public information is openly searchable; sensitive information is access controlled and released only under explicit, published rules.

**How it works.** Every record is classified as public or restricted under a published data policy. Restricted records require authorization and are released only to permitted parties, with each access logged.

**What it costs.** 0.5 CCU per public query; 5 CCU per authorized restricted query (Section 6.3).

### 7.7 Capital Market (Phase 3)

**What it is.** A regional venue where CDU enterprises raise capital from CDU and diaspora members, where members allocate savings into regional opportunities, and where the union issues bonds and provides small and medium enterprise lending.

**How it works.** All capital market activity runs through compliant structures inside the union's legal wrapper (Section 9). Investment instruments are treated as securities where they are securities; membership rights are not investment instruments.

**What it costs.** Service fees set at launch by vote; profit tax per Section 6.2 applies to enterprise earnings.

### 7.8 Insurance Access (Phase 4)

**What it is.** Access to insurance for citizens, provided by licensed partners. The CDU does not underwrite insurance risk and never carries correlated catastrophe risk on its own balance sheet. It operates as the identity, distribution, and instant payout layer that connects citizens to licensed insurers and to the region's established catastrophe facilities, which hold the risk.

**How it works (process).**
1. A citizen selects cover from a licensed partner listed in the union.
2. The union collects the premium in CCU and verifies eligibility through its identity system.
3. On an approved claim, or when a parametric trigger fires (for example, a defined wind speed or rainfall level), the payout is delivered to the citizen's wallet within seconds to hours.

**Why this design.** Caribbean catastrophe risk is correlated, since a single hurricane can strike many members at once. Correlated risk is absorbed by licensed carriers and reinsurers with the reserves and reinsurance to hold it, not by a young union. The CDU's contribution is to make insurance cheaper to distribute and far faster to pay out, using verified identity, wallets, parametric triggers, and its dispute system.

**What it costs.** Premiums are set by the underwriting partners; the union charges a small distribution and settlement fee.

### 7.9 Agents as public workers

Citizens can build and register AI agents to serve as union workers in defined roles: claim verification, database search, first pass evaluation, monitoring. Every agent operates within encoded rules, logs every action for audit, and is supervised by humans with **circuit breakers** that halt agent action under abnormal conditions. Agents take over a function only after it has been validated in service. Agent workers are paid per completed task at published rates, within the administrative cost cap of Section 5.5.

---

## 8. Dispute resolution

**What it is.** A fast, fair, bonded process for resolving any review, evaluation, claim, or service decision, where challenging a decision requires putting money behind your conviction.

**How it works (process).**

1. **Post.** A decision or claim is posted and enters a **72 hour challenge window** (default).
2. **Challenge.** To dispute it, a challenger posts a bond equal to **the greater of 25 CCU or 10 percent of the disputed amount** (defaults). If no one challenges within the window, the decision stands.
3. **Jury.** A challenge escalates to a **jury of 7** randomly selected verified citizens who meet a reputation threshold and each stake **25 CCU** to serve. Jurors review the evidence and vote within **5 days**. A **majority (4 of 7)** decides.
4. **Appeal.** Either party may appeal once to an expanded **panel of 15** at a higher bond. Disputes over **50,000 CCU** receive a final expert human arbiter.

**Outcome.** The winner receives the original reward plus the loser's forfeited bond. Jurors in the majority split a fee; jurors in the minority forfeit their stake. Because being wrong is costly, the great majority of decisions are never disputed, and most disputes resolve at the jury stage.

**Legal backstop.** Because the dispute system sits inside a real legal entity (Section 9), catastrophic failures beyond the bond can be pursued through the courts. The CDU does not rely on software alone to deliver justice.

---

## 9. Legal structure and compliance

**The union has real legal standing.** A digital union that holds members' funds, facilitates insurance access and capital raising, and runs dispute resolution performs regulated financial and quasi governmental functions. It therefore operates through real legal entities that can hold assets, sign contracts, and bear liability, which also protects individual citizens from personal liability for the union's actions.

**Structure.** The CDU is anchored by a **Cayman Islands foundation company**, a Caribbean domiciled entity with legal personality, limited liability, and strong institutional credibility, whose constitution mirrors the union's governance and names citizens as beneficiaries while holding them at arm's length from liability. Commercial and operating activities run through separate subsidiaries, so a single dispute cannot reach the governance anchor. **The DAO governs; the foundation and its subsidiaries act and bear liability.**

**Compliance.** The CDU is compliance first: anti money laundering and counter terrorist financing controls operate from day one; the union engages counsel in every jurisdiction it touches; and it does not treat the DAO label as an exemption from law.

**Securities.** Capital is raised through separated channels (Section 10). Investment instruments are structured and treated as securities where they constitute securities. Citizenship is non transferable and consumptive, not an investment.

**Technical security.** All software handling value is independently audited before launch, with continuous monitoring, bug bounties, staged rollouts, and explicit defenses against governance attacks and agent specific threats (prompt manipulation, drift, poisoned data).

---

## 10. Capital raise

**The CDU raises 100 million CCU over 24 months** to fund the reserve, the build, licensing, and operations. Funds are raised through three clearly separated channels:

1. **Development and grant capital**, from development bank and institutional partners; not an investment instrument.
2. **Investment capital**, structured compliantly and treated as securities where it constitutes securities.
3. **Citizenship**, free and non transferable; never a fundraising instrument.

**Pre launch contributions are held in independently audited escrow and released only at activation**, under a structure set with counsel before any solicitation. No contribution carrying an expectation of profit is solicited outside a compliant structure.

**Use of funds (default allocation).**

- 40 percent, CCU reserve and settlement liquidity
- 20 percent, technology build and security audits
- 15 percent, legal, compliance, and licensing across jurisdictions
- 15 percent, operations, partnerships, and market launch
- 10 percent, contingency reserve

---

## 11. Roadmap

The CDU launches around one sharp service and expands outward. Each phase gates on evidence (audits, legal clearance, participation, and volume) before the next begins.

**Phase 0, Foundations (Months 0 to 6).** Establish the legal wrapper; build the identity and verification layer; stand up multi signature treasury custody; complete security audits; open audited escrow; close the capital raise; open institutional partnership conversations.

**Phase 1, Launch: Send Money and Identity (Months 6 to 12).** Launch the CCU and the Send Money service on the United States to Saint Lucia and wider Eastern Caribbean diaspora corridor. Targets: 50,000 verified citizens and 25 million CCU in settled volume by end of Phase 1.

**Phase 2, Government and services (Months 12 to 24).** Roll out full voting, the dispute system, Business Registry, cross border B2B settlement, and Data Services. Expand corridors across CARICOM. Begin agent augmented administration under circuit breakers.

**Phase 3, Capital market (Months 24 to 36).** Launch the regional capital market, union bonds, and small and medium enterprise lending through compliant structures.

**Phase 4, Insurance access (Month 36 onward).** Launch insurance access by connecting citizens to licensed carriers and established regional catastrophe facilities, using the union's identity, premium collection, and instant payout rails. The union distributes and settles; partners underwrite and hold the risk.

---

## 12. Default parameters at a glance

| Parameter | Default value | How it changes |
|---|---|---|
| CCU value basis | Weighted basket of Caribbean currencies (GDP weighted); 1 CCU at launch, floats thereafter | Two thirds supermajority |
| CCU basket rebalance | Annual, re struck to GDP weights | Two thirds supermajority |
| CCU reserve ratio | 100 percent, held as cash and liquid short term instruments in the basket currencies | Two thirds supermajority |
| Reserve audit | Quarterly, published | Vote |
| CCU Savings fund | Optional, yield bearing; floating rate, about 3 to 4 percent target at launch | Rate floats with portfolio; policy by vote |
| Savings fund investment policy | Diversified regional government securities, per issuer cap, minimum liquidity reserve, capital and loss buffer | Two thirds supermajority |
| Citizenship eligibility | Caribbean nationals, and diaspora with a Caribbean national parent or grandparent | Two thirds supermajority |
| Individual citizenship | Free | Vote |
| Enterprise registration | 100 CCU one time | Vote |
| Settlement fee | 1.0 percent (hard cap 2.0 percent) | Vote |
| Union profit tax | 20 percent flat on net profit | Vote |
| Individual tax free threshold | 15,000 CCU per year via CDU | Vote |
| Data query fee (public / restricted) | 0.5 CCU / 5 CCU | Vote |
| Proposal endorsement threshold | 1 percent of citizens or 500, whichever is fewer | Vote |
| Voting window | 7 days | Vote |
| Voting quorum | 10 percent of citizens | Vote |
| Standard passage | Simple majority (over 50 percent) | Vote |
| Constitutional, parameter, or over 250k CCU passage | Two thirds (66.7 percent) | Two thirds supermajority |
| Participation reward | 2 CCU per vote, max 20 CCU per month | Vote |
| Administrative cost cap | 10 percent of annual revenue | Two thirds supermajority |
| Dispute challenge window | 72 hours | Vote |
| Dispute bond | Greater of 25 CCU or 10 percent of disputed amount | Vote |
| Dispute jury and appeal panel | 7 and 15 | Vote |
| Expert arbiter threshold | Disputes over 50,000 CCU | Vote |
| Capital raise | 100 million CCU over 24 months | Set at inception |

---

## 13. Risks and how the CDU handles them

- **Securities exposure.** Handled by separated capital channels, compliant structuring, and counsel before any solicitation (Sections 9 and 10).
- **Monetary and legal collision.** Avoided by using a fully reserved settlement unit that is defined by a basket of regional currencies and framed as a payment instrument, and by cooperating with rather than competing against monetary authorities (Sections 1 and 3).
- **Currency concentration.** Reduced by defining the CCU as a diversified GDP weighted basket rather than a single currency or a single peg, re struck annually (Section 3).
- **Personal liability for citizens.** Removed by the layered legal wrapper: the DAO governs, the legal entity bears liability (Section 9).
- **Plutocracy and voter apathy.** Countered by verified one person, one identity, quadratic voting, and paid participation (Sections 4 and 5).
- **Smart contract and governance attacks.** Countered by audits, monitoring, staged rollout, and modeled attack defenses (Section 9).
- **Agent failure.** Countered by human supervision, circuit breakers, audit logging, and phased delegation (Section 7.9).
- **Insurance and catastrophe risk.** The union never underwrites catastrophe risk; it distributes and settles for licensed carriers and established regional facilities that hold the risk (Section 7.8).
- **Savings fund credit and liquidity risk.** Kept away from the payment token entirely: the CCU is fully reserved in liquid assets and pays no yield, while sovereign credit and liquidity risk sits only in the opt-in CCU Savings fund, which is diversified, holds a liquid reserve and a capital buffer, excludes uninvestable names, and is disclosed to savers as an investment rather than a guaranteed deposit (Section 3).
- **Adoption risk.** Overcome by leading with genuine payment savings, not speculation, on the highest pain corridor first (Sections 7.1 and 11).

---

## 14. Glossary

- **CDU:** Caribbean Digital Union, the member owned digital union described here.
- **CCU:** Caribbean Currency Unit, the union's fully reserved digital settlement unit, whose value is set by a weighted basket of Caribbean currencies. It pays no yield and is used for payment.
- **CCU Savings fund:** an optional, regulated investment fund holding a diversified portfolio of Caribbean government securities, which pays savers a floating yield. It is separate from the CCU and is an investment, not a guaranteed deposit.
- **Caribbean descent:** for diaspora eligibility, having at least one parent or grandparent who is or was a national of a Caribbean state, proven by a documentary chain (birth certificate plus the qualifying relative's proof of nationality).
- **Basket (fixed quantity basket):** a way of defining a unit's value as a fixed bundle of several currencies, so the unit's value floats with the bundle rather than tracking any single currency; the method used by the IMF Special Drawing Right.
- **GDP weight:** each member currency's share of the union's combined gross domestic product, used to size its place in the basket.
- **DAO:** Decentralized Autonomous Organization, a member governed body whose rules and treasury are managed transparently through recorded votes.
- **KYC:** Know Your Customer, identity verification confirming a member is a real, unique person or entity.
- **Quadratic voting:** a voting method where casting n votes on one question costs n squared credits, so intensity of preference is expressed without letting any bloc dominate.
- **Reserve (fully reserved):** assets held one for one against every CCU issued, never lent or leveraged.
- **Parametric insurance:** insurance that pays out automatically when a measured trigger is met, such as a wind speed or rainfall level, rather than after a manual damage assessment.
- **Settlement:** the instant, final transfer of value between wallets.

---

*White Paper v1.1. A complete, self contained statement of what the Caribbean Digital Union is, what it costs, and how it works. All default values in Section 12 are set by this paper and changed thereafter by citizen vote. Exchange rates and GDP weights used to illustrate the CCU in Section 3 are indicative and are finalized against live market rates and audited GDP at launch.*
