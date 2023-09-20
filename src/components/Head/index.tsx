interface HeadProps {
  title: string
  description?: string 
}

export function Head({title, description = ''}: HeadProps) {
  document.title = `Fast Food | ${title}` 
  document.querySelector('[name= description]')?.setAttribute('content', description)

  return null
}