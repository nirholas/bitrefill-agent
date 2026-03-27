# Bitrefill Shopping Assistant Agent

An AI agent for [SperaxOS](https://github.com/nirholas/defi-agents) that helps users purchase gift cards, eSIMs, and mobile top-ups from 170+ countries using cryptocurrency or account balance via the [Bitrefill API](https://docs.bitrefill.com/docs/).

## Features

- Search gift cards, eSIMs, and mobile top-ups across 170+ countries
- Full purchase workflow: search → invoice → crypto payment → redemption code
- eSIM management: purchase new plans, top-up existing eSIMs
- Account balance checks and crypto deposits (Business API)
- BRGC bulk gift card batch creation (Business API)
- Affiliate commission tracking and referral order analysis
- Test product guidance for safe development

## Agent File

- `src/bitrefill-shopping-assistant.json` — agent configuration
- `locales/bitrefill-shopping-assistant.en-US.json` — English locale

## Adding to defi-agents

Copy `src/bitrefill-shopping-assistant.json` and `locales/bitrefill-shopping-assistant.en-US.json` to the [nirholas/defi-agents](https://github.com/nirholas/defi-agents) repository following the contribution guide.

## API Reference

Full Bitrefill API documentation: [docs.bitrefill.com/docs](https://docs.bitrefill.com/docs/)

## License

MIT
