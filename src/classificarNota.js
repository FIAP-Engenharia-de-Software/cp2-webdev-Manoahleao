// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  let resultado
  if (nota = 6)
    resultado = "Aprovado"
  else if (nota = 7)
    resultado = "Aprovado"
  else if (nota = 8)
    resultado = "Aprovado"
  else if (nota = 9)
    resultado = "Aprovado"
  else if (nota = 10)
    resultado = "Aprovado"
  else if (nota > 10)
    resultado = "Nota inválida"

  else if (nota = 5)
    resultado = "Reprovado"
  else if (nota = 4)
    resultado = "Reprovado"
  else if (nota = 3)
    resultado = "Reprovado"
  else if (nota = 2)
    resultado = "Reprovado"
  else if (nota = 1)
    resultado = "Reprovado"
  else if (nota < 0)
    resultado = "Nota inválida"
  else if (nota != Number)
    resultado = "Nota inválida"

  return resultado

}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };