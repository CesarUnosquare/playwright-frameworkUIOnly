Feature: Navegación básica
  Scenario: Verificar título de página
    Given el usuario navega a la página de inicio
    Then el título debe ser "Example Domain"