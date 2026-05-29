<template>
  <footer class="dyne-footer">
    <div class="dyne-footer__inner">
      <div class="dyne-footer__content">
        <div class="dyne-footer__top">
          <a class="dyne-footer__logo" href="https://dyne.org" aria-label="Dyne.org">
            <img class="dyne-footer__mark" src="/dyne-mark.svg" alt="" />
            <img class="dyne-footer__logotype" src="/dyne-logotype.svg" alt="Dyne.org" />
          </a>

          <nav class="dyne-footer__socials" aria-label="Dyne.org social links">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              class="dyne-footer__social"
              :href="social.href"
              :aria-label="`Follow Dyne.org on ${social.name}`"
              target="_blank"
              rel="me noopener"
            >
              {{ social.shortName }}
            </a>
          </nav>
        </div>

        <div class="dyne-footer__legal">
          <p>
            Copyleft &copy;1999-{{ currentYear }} Dyne.org foundation<br />
            Haparandadam 7-A1 1013AK Amsterdam
          </p>
          <p>
            Not for profit org. est. 2005 with reg.num. 34237525 at KvK.NL<br />
            <a href="https://dyne.org/donate">Make a donation.</a>
          </p>
          <p>
            The content of this website are licensed under a
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'twitter', shortName: 'Tw', href: 'https://socials.dyne.org/twitter' },
  { name: 'telegram', shortName: 'Tg', href: 'https://socials.dyne.org/telegram' },
  { name: 'github', shortName: 'Gh', href: 'https://socials.dyne.org/github' },
  { name: 'linkedin', shortName: 'In', href: 'https://socials.dyne.org/linkedin' },
  { name: 'instagram', shortName: 'Ig', href: 'https://socials.dyne.org/instagram' },
  { name: 'facebook', shortName: 'Fb', href: 'https://socials.dyne.org/facebook' },
  { name: 'youtube', shortName: 'Yt', href: 'https://socials.dyne.org/youtube' },
  { name: 'mastodon', shortName: 'Ma', href: 'https://socials.dyne.org/mastodon' },
  { name: 'medium', shortName: 'Me', href: 'https://socials.dyne.org/medium' },
  { name: 'discord', shortName: 'Di', href: 'https://socials.dyne.org/discord' },
  { name: 'matrix', shortName: 'Mx', href: 'https://socials.dyne.org/matrix' }
]
</script>
