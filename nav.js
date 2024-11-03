document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.nav__burger')
  const menu = document.querySelector('.nav__menu')
  const dropdownItems = document.querySelectorAll(
    '.nav__item--dropdown, .nav__dropdown-item--dropdown'
  )

  // Функция для открытия/закрытия бургер-меню
  burger.addEventListener('click', () => {
    menu.classList.toggle('nav__menu--active')
    burger.classList.toggle('nav__burger--active')
  })

  // Функция для открытия/закрытия выпадающих подменю в мобильной версии
  dropdownItems.forEach(item => {
    const link = item.querySelector('a')
    link.addEventListener('click', e => {
      const viewportWidth =
        window.innerWidth || document.documentElement.clientWidth
      if (viewportWidth <= 768) {
        // Изменено на <= для охвата 768px
        e.preventDefault()
        const dropdown = item.querySelector('.nav__dropdown')
        dropdown.classList.toggle('nav__dropdown--active')
      }
    })
  })

  // Функция для предотвращения выхода подменю за пределы экрана
  function adjustDropdownPosition() {
    if (window.innerWidth > 768) {
      dropdownItems.forEach(item => {
        const dropdown = item.querySelector('.nav__dropdown')
        if (dropdown) {
          dropdown.classList.remove('nav__dropdown--left')
          const rect = dropdown.getBoundingClientRect()
          if (rect.right > window.innerWidth) {
            dropdown.classList.add('nav__dropdown--left')
          }
        }
      })
    }
  }

  window.addEventListener('resize', adjustDropdownPosition)
  window.addEventListener('load', adjustDropdownPosition)
})
