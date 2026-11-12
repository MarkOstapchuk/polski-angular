import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CourseContentService {
  private readonly recordCounts = new Map<number, Promise<number>>();

  sourceRecordCount(lessonId: number): Promise<number> {
    const cached = this.recordCounts.get(lessonId);
    if (cached) return cached;

    const file = '/content/workbook-lesson' + String(lessonId).padStart(2, '0') + '-content.jsonl';
    const request = fetch(file)
      .then((response) => {
        if (!response.ok) throw new Error('Content file is not available');
        return response.text();
      })
      .then((text) => text.split('\n').filter((line) => line.trim().length > 0).length)
      .catch(() => 0);

    this.recordCounts.set(lessonId, request);
    return request;
  }
}
