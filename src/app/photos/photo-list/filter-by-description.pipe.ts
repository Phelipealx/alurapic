import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {

    transform(photos: Photo[], descriptionQuery: string) {
        if (descriptionQuery) {
            return photos.filter(photo => {
                return photo.description
                    .toUpperCase()
                    .includes(descriptionQuery
                        .trim()
                        .toUpperCase())
            });
        } else {
            return photos;
        }
    }
}