document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-nav-toggle]')
  const menu = document.querySelector('[data-nav-menu]')
  const links = document.querySelectorAll('.site-nav a, [data-nav-menu] a')

  toggle?.addEventListener('click', () => {
    menu?.classList.toggle('hidden')
  })

  links.forEach(link => {
    link.addEventListener('click', e => {
      const href = (link as HTMLAnchorElement).getAttribute('href')

      if (href?.startsWith('#')) {
        e.preventDefault()
        const el = document.querySelector(href)
        el?.scrollIntoView({ behavior: 'smooth' })
        menu?.classList.add('hidden')
      }
    })
  })
})