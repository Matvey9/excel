import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    static className = 'excel__header'

    toHTML() {
      return `
<input class="input" value="New table"/>
  <div>
    <div class="button">
      <i class="material-icons">
        delete
      </i>
    </div>
    <div class="button">
      <i class="material-icons">
        logout
      </i>
    </div>
  </div>

`
    }
}
